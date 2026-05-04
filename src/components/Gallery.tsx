type GalleryItem = {
  title: string;
  src: string;
};

const galleryItems: GalleryItem[] = [
  { title: "외관", src: "/images/exterior.jpg" },
  { title: "거실", src: "/images/livingroom.jpg" },
  { title: "주방", src: "/images/kitchen.jpg" },
  { title: "안방", src: "/images/bedroom.jpg" },
  { title: "작은방", src: "/images/smallroom.jpg" },
  { title: "욕실", src: "/images/bathroom.jpg" },
  { title: "테라스", src: "/images/terrace.jpg" },
];

export default function Gallery() {
  return (
    <section className="section section--soft" id="gallery">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Gallery</span>
          <h2>현장 이미지</h2>
          <p>외관부터 테라스까지 주요 공간을 한눈에 확인하세요.</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article className="gallery-card" key={item.title}>
              <img
                src={item.src}
                alt={`햇살가온 ${item.title} 이미지`}
                loading="lazy"
              />
              <strong>{item.title}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
