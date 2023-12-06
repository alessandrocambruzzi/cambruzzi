import { sql } from "@vercel/postgres";

export default async function Courses() {

 //   const courses = [
 //        { title: "Curso de HTML", url: "/img/html.svg", description: "O curso é realizado por..." },
//         { title: "Curso de CSS", url: "/img/css.svg", description: "O curso CSS é realizado por..." },
//         { title: "Curso de JS", url: "/img/js.svg", description: "O curso JSS é realizado por..." },
//         { title: "Curso de JS", url: "/img/js.svg", description: "O curso JSS é realizado por..." },
//         { title: "Curso de JS", url: "/img/design.svg", description: "O curso JSS é realizado por..." },
//         { title: "Curso de CSS", url: "/img/games.svg", description: "O curso CSS é realizado por..." }
//     ]
  const { rows } = await sql`select * from courses`;
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="cursos">
                    CONHEÇA NOSSOS <span>CURSOS</span>
                </h2>
            </div>
            {
                rows.map((course) => {
                    return (
                        <div className="bg-[#4d4d4d] rounded-md pb-2 "key={course.id}>
                            <a href="/curso_html.html">
                                <img className="hover:scale-105" src={course.url} alt="" />
                                <div className="text-white text-center">
                                    <h3>{course.title}L</h3>
                                    <p>{course.description}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </main>
  )
}