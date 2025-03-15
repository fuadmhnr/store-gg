import { Game } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export function GamesSection() {
  const [games, setGames] = useState<Game[]>([]);

  // Ambil data games dari API
  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch("http://localhost:8000/games");
      const data = await response.json();
      setGames(data);
    };

    fetchGames();
  }, []);

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
