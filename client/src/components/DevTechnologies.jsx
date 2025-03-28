import React from 'react'

export default function DevTechnologies() {
  return (
    <section>
      <div className="relative max-w-9xl px-4 py-10 lg:py-20 md:grid md:grid-cols-2 gap-x-10 gap-y-10  m-auto">
        <span class="absolute font-semibold text-[3rem] md:text-[12rem] font-theme-font leading-none opacity-10 top-[-25px] left-0 text-gray-500 text-shadow-2">
          Technologies
        </span>
        {/* heading  */}
        <div className="col-span-2 flex flex-col mb-4">
          <div className="mb-2">
            <h2 className="text-xl md:text-4xl text-gray-600 font-bold tracking-wide font-theme-font">
              We Use
            </h2>
          </div>
          <div className="md:mb-4">
            <h1 className="text-3xl md:text-5xl text-black font-bold tracking-wide font-theme-font">
              Technologies
            </h1>
          </div>
        </div>
        {/* Content  */}
        <div className="col-span-2 grid md:grid-cols-2 gap-x-5 gap-y-10">
          {/* left content */}

          {/* 1 card*/}
          <div className="md:h-72 2xl:h-96 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
            <h4 className="mb-4 mr-auto text-start text-xl 2xl:text-2xl font-bold font-theme-font">
              Back End
            </h4>

            <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
              {/* next.js  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Nest.png.webp"
                    alt="DIGITECHII SOFTWARE NestJS"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">NestJS</div>
              </div>
              {/* flast.js  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Flask_logo-1-1.png.webp"
                    alt="DIGITECHII SOFTWARE Flask"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Flask</div>
              </div>
              {/* Django */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/django-svgrepo-com-1.png.webp"
                    alt="DIGITECHII SOFTWARE Django"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Django</div>
              </div>
              {/* Express.js */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/express-js-icon-1.png.webp"
                    alt="DIGITECHII SOFTWARE Express.js"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Express.js</div>
              </div>
              {/* .NET */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft_.NET_logo-1.png.webp"
                    alt="DIGITECHII SOFTWARE .NET"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">.NET</div>
              </div>
              {/* PHP */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/PHP-logo-1.png.webp"
                    alt="DIGITECHII SOFTWARE PHP"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">PHP</div>
              </div>
              {/* Java Spring */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/spring.png.webp"
                    alt="DIGITECHII SOFTWARE Java Spring"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Java Spring</div>
              </div>
              {/* Python */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/python.png.webp"
                    alt="DIGITECHII SOFTWARE Python"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Python</div>
              </div>
              {/* Node.js */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/node-js-1.png.webp"
                    alt="DIGITECHII SOFTWARE Node.js"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Node.js</div>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="md:h-72 2xl:h-96 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
            <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
              Front End
            </h4>
            <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
              {/* NestJS  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                    alt="DIGITECHII SOFTWARE NestJS "
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">NestJS</div>
              </div>
              {/* Svelte  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                    alt="DIGITECHII SOFTWARE Svelte"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Svelte</div>
              </div>
              {/* Vue.js  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                    alt="DIGITECHII SOFTWARE Vue.js"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Vue.js</div>
              </div>
              {/* Angular */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                    alt="DIGITECHII SOFTWARE Angular"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Angular</div>
              </div>
              {/* React.js */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                    alt="DIGITECHII SOFTWARE React.js"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">React.js</div>
              </div>
              {/* PWA */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                    alt="DIGITECHII SOFTWARE PWA"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">PWA</div>
              </div>
              {/* TypeScript */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                    alt="DIGITECHII SOFTWARE TypeScript"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">TypeScript</div>
              </div>
              {/* JavaScript */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                    alt="DIGITECHII SOFTWARE JavaScript"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">JavaScript </div>
              </div>
              {/* HTML/CSS */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                    alt="DIGITECHII SOFTWARE HTML/CSS"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">HTML/CSS</div>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="md:h-72 2xl:h-96 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
            <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
              Database Development
            </h4>

            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
              {/* MariaDB */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mariadb-1.png.webp"
                    alt="DIGITECHII SOFTWARE MariaDB "
                  />
                </div>
                <div className="font-semibold">MariaDB</div>
              </div>
              {/* Redis  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/redis-logo-svgrepo-com-1.png.webp"
                    alt="DIGITECHII SOFTWARE Redis"
                  />
                </div>
                <div className="font-semibold">Redis</div>
              </div>
              {/* Cassandra  */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Cassandra.png.webp"
                    alt="DIGITECHII SOFTWARE Cassandra"
                  />
                </div>
                <div>Cassandra</div>
              </div>
              {/* MongoDB */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mongodb-svgrepo-com-1.png.webp"
                    alt="DIGITECHII SOFTWARE MongoDB"
                  />
                </div>
                <div>MongoDB</div>
              </div>
              {/* Oracle DB */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/oracle-svgrepo-com-1.png.webp"
                    alt="DIGITECHII SOFTWARE Oracle DB"
                  />
                </div>
                <div>Oracle DB</div>
              </div>
              {/* SQL */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Microsoft-SQL-Server-1.png.webp"
                    alt="DIGITECHII SOFTWARE SQL Server"
                  />
                </div>
                <div>SQL Server</div>
              </div>
              {/* PostgreSQL */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Postgresql_elephant-1.png.webp"
                    alt="DIGITECHII SOFTWARE PostgreSQL"
                  />
                </div>
                <div>PostgreSQL</div>
              </div>
              {/* MYSQL */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/mysqlworkbench_93532-1.png.webp"
                    alt="DIGITECHII SOFTWARE MYSQL"
                  />
                </div>
                <div>MySQL</div>
              </div>
              {/* Elasticsearch */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/elasticsearch-1.png.webp"
                    alt="DIGITECHII SOFTWARE Elasticsearch"
                  />
                </div>
                <div>Elasticsearch</div>
              </div>
            </div>
          </div>
          {/* item 4 */}
          <div className="md:h-72 2xl:h-96 w-auto p-4 md:p-10 flex flex-col items-center justify-center rounded-3xl shadow-xl bg-slate-50 border-2 border-b-4">
            <h4 className="mb-4 mr-auto text-start text-xl font-bold font-theme-font">
              DevOps & Cloud
            </h4>

            <div className="w-full grid grid-cols-2  md:grid-cols-3 gap-x-2 gap-y-10 text-start tracking-wide leading-5 font-theme-font">
              {/* item 1 */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Next.png.webp"
                    alt="DIGITECHII SOFTWARE NestJS "
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">NestJS</div>
              </div>
              {/* item 2 */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Group-4.png.webp"
                    alt="DIGITECHII SOFTWARE Flask"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Svelte</div>
              </div>
              {/* item 3 */}
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Vue-js.png.webp"
                    alt="DIGITECHII SOFTWARE Vue.js"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Vue.js</div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Angular_full_color_logo-1.png.webp"
                    alt="DIGITECHII SOFTWARE Angular"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">Angular</div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/React-icon-1.png.webp"
                    alt="DIGITECHII SOFTWARE React.js"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">React.js</div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Progressive_Web_Apps_Logo-1.png.webp"
                    alt="DIGITECHII SOFTWARE PWA"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">PWA</div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/Typescript_logo_2020-1.png.webp"
                    alt="DIGITECHII SOFTWARE TypeScript"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">TypeScript</div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/JS.png.webp"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">JavaScript </div>
              </div>
              <div className="flex gap-1 items-center">
                <div className="h-8 2xl:h-12 w-auto shrink-0">
                  <img
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    src="https://devoxsoftware.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/02/CSS3_and_HTML5_logos_and_wordmarks-1.png.webp"
                    alt="DIGITECHII SOFTWARE HTML/CSS"
                  />
                </div>
                <div className="font-semibold 2xl:text-xl">HTML/CSS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
