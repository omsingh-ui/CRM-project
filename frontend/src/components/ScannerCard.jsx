import { useRef, useState, useEffect } from "react";
import { FaCamera, FaCheckCircle, FaTimes } from "react-icons/fa";

export default function ScannerCard() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [camera, setCamera] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function stopCamera() {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject
        .getTracks()
        .forEach((track) => track.stop());

      videoRef.current.srcObject = null;
    }

    setCamera(false);
  }

  async function openCamera() {
    try {
      setLoading(true);
      setError("");

      if (photo) {
        setPhoto(null);
      }

      const stream =
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

      setCamera(true);

      requestAnimationFrame(() => {
        if (!videoRef.current) {
          setError("Video failed to load");
          return;
        }

        videoRef.current.srcObject = stream;

        videoRef.current.onloadedmetadata =
          async () => {
            try {
              await videoRef.current.play();
            } catch {
              setError("Unable to start camera");
            }
          };
      });
    } catch (err) {
      setError(
        err.name === "NotAllowedError"
          ? "Camera permission denied"
          : err.name === "NotFoundError"
          ? "No camera detected"
          : "Unable to open camera"
      );
    } finally {
      setLoading(false);
    }
  }

  function capture() {
    const canvas = canvasRef.current;
    const video = videoRef.current;

    if (!video || !video.videoWidth) {
      setError("Camera not ready");
      return;
    }

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");

    ctx.filter =
      "contrast(1.25) brightness(1.1) grayscale(1)";

    ctx.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    setPhoto(canvas.toDataURL("image/png"));

    stopCamera();
  }

  useEffect(() => {
    return () => stopCamera();
  }, []);

  return (
    <div
      className="
      rounded-3xl
      border
      border-slate-200/80
      bg-white
      p-6
      shadow-sm
      dark:border-zinc-800
      dark:bg-zinc-900
      "
    >
      {/* Header */}

      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-2xl
          bg-blue-100
          text-blue-600
          dark:bg-blue-900/30
          dark:text-blue-400
          "
        >
          <FaCamera />
        </div>

        <div>
          <h2
            className="
            text-xl
            font-black
            tracking-tight
            text-slate-900
            dark:text-white
            "
          >
            Document Scanner
          </h2>

          <p
            className="
            mt-1
            text-sm
            leading-5
            text-slate-500
            dark:text-slate-400
            "
          >
            Capture documents directly using your webcam.
          </p>
        </div>
      </div>

      {/* Error */}

      {error && (
        <div
          className="
          mt-5
          flex
          items-center
          justify-between
          gap-3
          rounded-xl
          border
          border-red-200
          bg-red-50
          px-4
          py-3
          text-sm
          text-red-600
          dark:border-red-900/40
          dark:bg-red-900/20
          dark:text-red-400
          "
        >
          <span>{error}</span>

          <button
            type="button"
            onClick={() => setError("")}
            className="shrink-0"
          >
            <FaTimes size={12} />
          </button>
        </div>
      )}

      {/* Camera */}

      {camera && (
        <div className="mt-5 sm:mt-6">
          <div
            className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-slate-950
            dark:border-zinc-700
            "
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="
              aspect-video
              w-full
              object-cover
              "
            />

            {/* Scanner Frame */}

           <div
  className="
  pointer-events-none
  absolute
  inset-5
  rounded-xl
  border-2
  border-white/70
  sm:inset-8
  "
/>

            <div
              className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-px
              w-[70%]
              -translate-x-1/2
              bg-blue-400/70
              "
            />
          </div>

          <button
  type="button"
  onClick={capture}
  className="
  mt-3
  flex
  w-full
  items-center
  justify-center
  gap-2
  rounded-xl
  bg-emerald-600
  px-4
  py-3
  font-semibold
  text-white
  transition
  duration-200
  hover:bg-emerald-700
  hover:shadow-md
  sm:mt-4
  "
>
            <FaCamera size={15} />
            Capture Document
          </button>

         <button
  type="button"
  onClick={stopCamera}
  className="
  mt-1.5
  w-full
  rounded-xl
  px-4
  py-2
  text-sm
  font-medium
  text-slate-500
  transition
  hover:bg-slate-100
  hover:text-slate-700
  dark:text-slate-400
  dark:hover:bg-zinc-800
  dark:hover:text-white
  sm:mt-2
  "
>
  Cancel
</button>
        </div>
      )}

      {/* Preview */}

      {!camera && photo && (
  <div className="mt-5 sm:mt-6">
          <div
            className="
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            dark:border-zinc-700
            "
          >
            <img
              src={photo}
              alt="Scanned document"
              className="
              aspect-video
              w-full
              object-cover
              "
            />
          </div>

         <div
  className="
  mt-3
  flex
  items-center
  gap-3
  rounded-xl
  bg-emerald-50
  px-4
  py-3
  text-sm
  font-semibold
  text-emerald-700
  dark:bg-emerald-900/20
  dark:text-emerald-400
  sm:mt-4
  "
>
            <FaCheckCircle />

            Document ready
          </div>
        </div>
      )}

      {/* Open Camera */}

     {!camera && (
  <button
    type="button"
    onClick={openCamera}
    disabled={loading}
    className="
    mt-5
    flex
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-blue-600
    px-4
    py-3
    font-semibold
    text-white
    shadow-sm
    transition
    duration-200
    hover:bg-blue-700
    hover:shadow-md
    disabled:cursor-not-allowed
    disabled:opacity-60
    sm:mt-6
    "
  >
          <FaCamera size={15} />

          {loading
            ? "Opening Camera..."
            : photo
            ? "Scan Again"
            : "Scan Document"}
        </button>
      )}

      {/* Hidden Canvas */}

      <canvas
        ref={canvasRef}
        className="hidden"
      />
    </div>
  );
}