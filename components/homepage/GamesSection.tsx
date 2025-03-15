import Image from "next/image";

export function GamesSection() {
  const games = [
    {
      id: 1,
      slug: "super-mechs",
      imageSrc: "/assets/img/Thumbnail-1.png",
      title: "Super Mechs",
      platform: "Mobile",
    },
    {
      id: 2,
      slug: "call-of-duty-modern",
      imageSrc: "/assets/img/Thumbnail-2.png",
      title: "Call of Duty: Modern",
      platform: "Mobile",
    },
    {
      id: 3,
      slug: "mobile-legends",
      imageSrc: "/assets/img/Thumbnail-3.png",
      title: "Mobile Legends",
      platform: "Mobile",
    },
    {
      id: 4,
      slug: "clash-of-clans",
      imageSrc: "/assets/img/Thumbnail-4.png",
      title: "Clash of Clans",
      platform: "Mobile",
    },
    {
      id: 5,
      slug: "supercell",
      imageSrc: "/assets/img/Thumbnail-5.png",
      title: "Supercell",
      platform: "Mobile",
    },
  ];

  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br /> Games This Year
        </h2>
        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          {games.map((game) => (
            <div key={game.id} className="featured-game-card position-relative">
              <a href={`/games/${game.slug}`}>
                <div className="blur-sharp">
                  <Image
                    src={game.imageSrc}
                    width={205}
                    height={270}
                    alt={game.title}
                  />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                  <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
                    <div className="game-icon mx-auto">
                      <svg
                        width={54}
                        height={36}
                        viewBox="0 0 54 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* SVG Path */}
                      </svg>
                    </div>
                    <div>
                      <p className="fw-semibold text-white text-xl m-0">
                        {game.title}
                      </p>
                      <p className="fw-light text-white m-0">{game.platform}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
