export default function VimeoPlayer() {
    return (
      <div className="aspect-video">
        <iframe
          src="https://vimeo.com/1001970850"
          className="w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }