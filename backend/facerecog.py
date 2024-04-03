import threading
import cv2

from deepface import DeepFace 


cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

cap.set(cv2.CAP_PROP_FRAME_WIDTH,940)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 680)

COUNTER = 0

face_match=False 

reference_img = cv2.imread("backend\\reference_img\\swarn.jpeg")

def check_face(frame):
    global face_match 
    try:
        if DeepFace.verify(frame , reference_img.copy())['verified']:
            face_match = True
        else:
            face_match = False
    except ValueError:
        face_match = False


while True:
    ret,frame= cap.read()

    if ret:
        if COUNTER % 30 ==0 :
            try:
                threading.Thread(target=check_face, args = (frame.copy(),)).start()

            except ValueError:
                pass
        COUNTER +=1

        if face_match:
            cv2.putText(frame, "Face Recognized!!" ,  (20,450), cv2.FONT_HERSHEY_SIMPLEX, 2, (0,255,0) , 3 )
        else:
            cv2.putText(frame, "Face Not Recognized!!" ,  (20,450), cv2.FONT_HERSHEY_SIMPLEX, 2, (0,0,255) , 3 )
        cv2.imshow("face recognition",frame)

    key = cv2.waitKey(1)
    if key == ord("q"):
        break

cv2.destroyAllWindows()


