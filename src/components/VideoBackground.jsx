export default function VideoBackground() {
    return (
      <>
        <video className="video" autoPlay loop muted playsInline>
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>
      </>
    );
  }