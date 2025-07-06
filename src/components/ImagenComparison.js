import { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import imageSala from "../files/img/static/imageSala.webp";
import imageSala2 from "../files/img/static/news/d4.jpeg";
function Feature() {
  const [inset, setInset] = useState(50);
  const [onMouseDown, setOnMouseDown] = useState(false);

  const onMouseMove = (e) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if (e.touches && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
          <div className="w-full h-full ">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{ left: inset + "%" }}
              >
                <button
                  className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <RxDragHandleDots2 className="h-4 w-4 select-none" />
                </button>
              </div>

              <img
                src={imageSala}
                alt="feature8"
                className="absolute left-0 top-0 z-10 w-full h-full aspect-auto rounded-2xl select-none border "
                style={{
                  clipPath: `inset(0 0 0 ${inset}%)`,
                }}
              />

              <img
                src={imageSala2}
                alt="darkmode-feature8"
                className="absolute left-0 top-0 w-full h-full aspect-auto rounded-2xl select-none border"
              />
            </div>
          </div>
  );
}

export default Feature;