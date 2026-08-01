// ======================================================
// TU AS VÉCU COMBIEN ? — Scriptable
// Version 5.3.3 — hors ligne, Wikipédia + Life Grid
// ======================================================

const CONFIG = {
  lifeExpectancy: 100,
  sleepHoursPerDay: 8,
  heartbeatsPerMinute: 72,
  breathsPerMinute: 16,
  blinksPerMinuteAwake: 15,
  walkingKmPerDay: 4.5,
  toiletMinutesPerDay: 30,
  earthOrbitKmPerYear: 940_000_000
}

const BIRTHDAY_STARS = {"01-01":[["William Shakespeare",1564],["Christopher Columbus",1451],["Giorgio Armani",7]],"01-02":[["Albert C Barnes",1872],["John Hope Franklin",1915],["Lillian Roberts",1928]],"01-03":[["J R R Tolkien",1892],["Victor Borge",1909],["James T McHugh",1932]],"01-04":[["Don Shula",1930],["William E Colby",1920],["Amitai Etzioni",1929]],"01-05":[["Robert Duvall",1931],["Alvin Ailey",1931],["Alfred Brendel",1931]],"01-06":[["E L Doctorow",1931],["Ralph Branca",1926],["Lou Holtz",1937]],"01-07":[["Zora Neale Hurston",1891],["Francis Poulenc",1899],["Raila Odinga",1945]],"01-08":[["Elvis Presley",1935],["David Bowie",1947],["Slade Gorton",1928]],"01-09":[["Richard Milhous Nixon",1913],["Brian Friel",1929],["Rudolf Bing",1902]],"01-10":[["Roy E Disney",1930],["Max Roach",1924],["Stephen E Ambrose",1936]],"01-11":[["Alexander Hamilton",1755],["Richard A Posner",1939],["Eve Queler",1931]],"01-12":[["John Singer Sargent",1856],["Morton Feldman",1926],["Anna Kisselgoff",1938]],"01-13":[["Pierre Franey",1921],["Gwen Verdon",1925],["Brandon Tartikoff",1949]],"01-14":[["Giulio Andreotti",1919],["Lauch Faircloth",1928],["Franklin D Raines",1949]],"01-15":[["Mary Pierce",1975],["Moliere",1622],["Edward Teller",1908]],"01-16":[["Susan Sontag",1933],["Norman Podhoretz",1930],["Marilyn Horne",1934]],"01-17":[["Muhammad Ali",1942],["Benjamin Franklin",1706],["Jim Carrey",1962]],"01-18":[["A A Milne",1882],["John Hume",1937],["Bill Keller",1949]],"01-19":[["Edgar Allan Poe",1809],["Robert E Lee",1807],["Patricia Highsmith",1921]],"01-20":[["George Burns",1896],["Federico Fellini",1920],["David Lynch",1946]],"01-21":[["Neil L Rudenstine",1935],["Jack Nicklaus",1940],["Placido Domingo",1941]],"01-22":[["August Strindberg",1849],["Sergei Eisenstein",1898],["George Balanchine",1904]],"01-23":[["Edouard Manet",1832],["Frank R Lautenberg",1924],["Chita Rivera",1933]],"01-24":[["Edith Wharton",1862],["Neil Diamond",1941],["John Garamendi",1945]],"01-25":[["Virginia Woolf",1882],["Conrad Burns",1935],["Paul R Shanley",1931]],"01-26":[["Paul Newman",1925],["Nicolae Ceausescu",1918],["Jules Feiffer",1929]],"01-27":[["Wolfgang Amadeus Mozart",1756],["Jerome Kern",1885],["Skitch Henderson",1918]],"01-28":[["Jackson Pollock",1912],["Alan Alda",1936],["Chuck Haytaian",1938]],"01-29":[["Oprah Winfrey",1954],["Anton Chekhov",1860],["Tom Selleck",1945]],"01-30":[["Franklin Delano Roosevelt",1882],["Vanessa Redgrave",1937],["Islam Karimov",1938]],"01-31":[["Justin Timberlake",1981],["Franz Schubert",1797],["Philip Glass",1937]],"02-01":[["Muriel Spark",1918],["Langston Hughes",1902],["Tom Lantos",1928]],"02-02":[["James Joyce",1882],["Elaine Stritch",1925],["Ayn Rand",1905]],"02-03":[["Felix Mendelssohn",1809],["Norman Rockwell",1894],["Gertrude Stein",1874]],"02-04":[["Rosa Parks",1913],["Betty Friedan",1921],["Charles A Lindbergh",1902]],"02-05":[["Hank Aaron",1934],["William S Burroughs",1914],["John Guare",1938]],"02-06":[["Aaron Burr",1756],["George Herman Ruth",1895],["Ronald Wilson Reagan",1911]],"02-07":[["Charles Dickens",1812],["Gay Talese",1932],["Josef Ackermann",1948]],"02-08":[["James Dean",1931],["John Williams",1932],["Jack Lemmon",1925]],"02-09":[["Alban Berg",1885],["Gerhard Richter",1932],["Letitia Baldrige",1926]],"02-10":[["Bertolt Brecht",1898],["Richard Schickel",1933],["Kirk Fordice",1934]],"02-11":[["Thomas A Edison",1847],["Burt Reynolds",1936],["Manuel Antonio Noriega",1934]],"02-12":[["Abraham Lincoln",1809],["Charles Robert Darwin",1809],["Max Beckmann",1884]],"02-13":[["Sheldon Silver",1944],["Richard Blumenthal",1946],["Mike Krzyzewski",1947]],"02-14":[["Michael R Bloomberg",1942],["James E Cayne",1934],["Stephen A Schwarzman",1947]],"02-15":[["Luis Posada Carriles",1928],["James R Schlesinger",1929],["Claire Bloom",1931]],"02-16":[["Carl C Icahn",1936],["George F Kennan",1904],["John Corigliano",1938]],"02-17":[["Michael Jordan",1963],["Ruth Rendell",1930],["Mary Frances Berry",1938]],"02-18":[["Louis Comfort Tiffany",1848],["Yoko Ono",1933],["John W Warner",1927]],"02-19":[["John Frankenheimer",1930],["Howard Stringer",1942],["Carolyn B Maloney",1946]],"02-20":[["Sharpe James",1936],["Robert Altman",1925],["Ansel Adams",1902]],"02-21":[["Robert Mugabe",1924],["Wystan Hugh Auden",1907],["Barbara Jordan",1936]],"02-22":[["George Washington",1732],["Edward M Kennedy",1932],["Edward Gorey",1925]],"02-23":[["George Frederick Handel",1685],["Claire Shulman",1926]],"02-24":[["Winslow Homer",1836],["George Ryan",1934],["Joseph I Lieberman",1942]],"02-25":[["George Harrison",1943],["Enrico Caruso",1873],["Sun Myung Moon",1920]],"02-26":[["Ariel Sharon",1928],["Robert Novak",1931],["Johnny Cash",1930]],"02-27":[["Elizabeth Taylor",1932],["Ralph Nader",1934],["John Steinbeck",1902]],"02-28":[["Frank Gehry",1929],["Charles Durning",1923],["Steven Chu",1948]],"02-29":[["Gioachino Rossini",1792],["Tony Robbins",1960],["Ja Rule",1976]],"03-01":[["Frederic Chopin",1810],["Robert H Bork",1927],["Ralph Ellison",1913]],"03-02":[["Mikhail S Gorbachev",1931],["Tom Wolfe",1931],["Kurt Weill",1900]],"03-03":[["Warner Leroy",1935],["Ion Iliescu",1930],["Ron Chernow",1949]],"03-04":[["Antonio Vivaldi",1678],["Bernard Haitink",1929],["Harry B Helmsley",1909]],"03-05":[["Olusegun Obasanjo",1937],["Lawrence A Bossidy",1935],["Roy M Goodman",1930]],"03-06":[["Michelangelo Buonarroti",1475],["Alan Greenspan",1926],["Lorin Maazel",1930]],"03-07":[["Piet Mondrian",1872],["Milton Avery",1885],["David Baltimore",1938]],"03-08":[["Jim Bouton",1939],["Lynn Redgrave",1943],["Judith H Dobrzynski",1949]],"03-09":[["Juliette Binoche",1964],["Samuel Barber",1910],["Ornette Coleman",1930]],"03-10":[["James Earl Ray",1928],["Mark Lamos",1946],["David Rabe",1940]],"03-11":[["Rupert Murdoch",1931],["Antonin Scalia",1936],["Astor Piazzolla",1921]],"03-12":[["Vaslav Nijinsky",1889],["Adolph S Ochs",1858],["Jack Kerouac",1922]],"03-13":[["Walter H Annenberg",1908],["Leon Hess",1914],["William H Macy",1949]],"03-14":[["Albert Einstein",1879],["Horton Foote",1916],["Michael Caine",1933]],"03-15":[["Ruth Bader Ginsburg",1933],["Judd Hirsch",1935],["Mark Green",1945]],"03-16":[["Isabelle Huppert",1953],["Daniel Patrick Moynihan",1927],["Jerry Lewis",1926]],"03-17":[["Rudolf Nureyev",1938]],"03-18":[["John Updike",1932],["George Plimpton",1927],["John Kander",1927]],"03-19":[["Philip Roth",1933],["Brent Scowcroft",1925],["Adolf Eichmann",1906]],"03-20":[["Henrik Ibsen",1828],["Abraham D Beame",1906],["Carl Reiner",1922]],"03-21":[["Johann Sebastian Bach",1685],["Eric Rohmer",1920],["Peter Brook",1925]],"03-22":[["Stephen Sondheim",1930],["Pat Robertson",1930],["William Shatner",1931]],"03-23":[["Akira Kurosawa",1910],["Viktor Korchnoi",1931]],"03-24":[["Edward Weston",1886],["Harry Houdini",1874],["David Irving",1938]],"03-25":[["Aretha Franklin",1942],["Bela Bartok",1881],["Gloria Steinem",1934]],"03-26":[["Robert Frost",1874],["Mahmoud Abbas",1935],["Tennessee Williams",1911]],"03-27":[["Quentin Tarantino",1963],["Mariah Carey",1969],["Edward Steichen",1879]],"03-28":[["Zbigniew Brzezinski",1928],["Frank H Murkowski",1933],["Henry M Jr Paulson",1946]],"03-29":[["Vincent Gigante",1928],["Walt Frazier",1945],["Robert J Shiller",1946]],"03-30":[["Vincent van Gogh",1853],["Francisco de Goya",1746],["Brooke Astor",1902]],"03-31":[["Franz Joseph Haydn",1732],["Gordie Howe",1928],["Israel Horovitz",1939]],"04-01":[["Sergei Rachmaninoff",1873],["Abdul Qadeer Khan",1936],["Dan Flavin",1933]],"04-02":[["Hans Christian Andersen",1805],["Edward M Egan",1932],["Anthony Lake",1939]],"04-03":[["Marlon Brando",1924],["Eddie Murphy",1961],["Washington Irving",1783]],"04-04":[["Richard G Lugar",1932],["Maya Angelou",1928],["Clive Davis",1932]],"04-05":[["Henry James",1843],["Colin L Powell",1937],["Bette Davis",1908]],"04-06":[["James D Watson",1928],["Andre Previn",1929],["I Leo Glasser",1924]],"04-07":[["Jackie Chan",1954],["Francis Ford Coppola",1939],["Billie Holiday",1915]],"04-08":[["Joseph L Bruno",1929],["Kofi Annan",1938],["Fred Ebb",1928]],"04-09":[["Paul Robeson",1898],["Hugh Hefner",1926],["Viktor S Chernomyrdin",1938]],"04-10":[["David Halberstam",1934],["Paul Theroux",1941],["Bob Watson",1946]],"04-11":[["Hugh L Carey",1919],["Ethel Kennedy",1928],["Eugene A Ludwig",1946]],"04-12":[["Alan Ayckbourn",1939],["David Letterman",1947],["Jacob G Zuma",1942]],"04-13":[["Thomas Jefferson",1743],["Samuel Beckett",1906],["Seamus Heaney",1939]],"04-14":[["Byron Calame",1939],["Marvin Miller",1917],["John Gielgud",1904]],"04-15":[["Leonardo da Vinci",1452],["Nikita S Khrushchev",1894],["Arshile Gorky",1904]],"04-16":[["Charlie Chaplin",1889],["Benedict XVI",1927],["Merce Cunningham",1919]],"04-17":[["Thornton Wilder",1897],["Andrew J Spano",1936],["Cynthia Ozick",1928]],"04-18":[["Samuel P Huntington",1927],["Henry J Hyde",1924],["James Woods",1947]],"04-19":[["Stanley Fish",1938],["Joseph Estrada",1937],["Murray Perahia",1947]],"04-20":[["Adolf Hitler",1889],["Joan Miro",1893],["John Paul Stevens",1920]],"04-21":[["Queen of Great Britain Elizabeth II",1926],["James C Dobson",1936],["Thomas H Kean",1935]],"04-22":[["Vladimir Nabokov",1899],["Vladimir Lenin",1870],["Jack Nicholson",1937]],"04-23":[["Joseph Mallord William Turner",1775],["Dickinson R Debevoise",1924],["Blair Brown",1947]],"04-24":[["Anthony Trollope",1815],["Willem de Kooning",1904],["Shirley MacLaine",1934]],"04-25":[["Al Pacino",1940],["Ella Fitzgerald",1917],["Dominique Strauss-Kahn",1949]],"04-26":[["John James Audubon",1785],["Frederick Law Olmsted",1822],["I M Pei",1917]],"04-27":[["Sergei Prokofiev",1891],["Ulysses S Grant",1822],["Coretta Scott King",1927]],"04-28":[["Saddam Hussein",1937],["James A III Baker",1930],["Diane Johnson",1934]],"04-29":[["Duke Ellington",1899],["Bernard L Madoff",1938],["Willie Nelson",1933]],"04-30":[["Sheldon Harnick",1924],["Ellen Taaffe Zwilich",1939],["Lee C Bollinger",1946]],"05-01":[["Judy Collins",1939],["Henry J Stern",1935],["Joseph Heller",1923]],"05-02":[["David Beckham",1975],["Martha Grimes",1931],["Benjamin Spock",1903]],"05-03":[["James Brown",1933],["Omar Abdel Rahman",1938],["Pete Seeger",1919]],"05-04":[["Audrey Hepburn",1929],["Hosni Mubarak",1928],["Maurice R Greenberg",1925]],"05-05":[["Karl Marx",1818],["Richard Bernstein",1944],["Linda Fairstein",1947]],"05-06":[["Sigmund Freud",1856],["Orson Welles",1915],["George Clooney",1961]],"05-07":[["Peter Ilyich Tchaikovsky",1840],["Johannes Brahms",1833],["Pete V Domenici",1932]],"05-08":[["Harry S Truman",1884],["John C Bogle",1929],["Theodore C Sorensen",1928]],"05-09":[["Alan Bennett",1934],["Charles Simic",1938],["John Ashcroft",1942]],"05-10":[["Fred Astaire",1899],["Milton Babbitt",1916],["Pat Summerall",1930]],"05-11":[["Martha Graham",1894],["Irving Berlin",1888],["Salvador Dali",1904]],"05-12":[["Jules Massenet",1842],["Yogi Berra",1925],["Katharine Hepburn",1907]],"05-13":[["Stevie Wonder",1950],["Arthur S Sullivan",1842],["Harvey Keitel",1939]],"05-14":[["George Lucas",1944],["Ernesto Guevara",1928],["Joe Louis",1914]],"05-15":[["Claudio Monteverdi",1567],["Arthur Schnitzler",1862],["Jasper Johns",1930]],"05-16":[["Philippe de Montebello",1936],["John Jr Conyers",1929],["Studs Terkel",1912]],"05-17":[["Dennis Hopper",1936],["Archibald Cox",1912],["Dennis Potter",1935]],"05-18":[["Czar of Russia Nicholas II",1868],["John Paul II",1920],["Reggie Jackson",1946]],"05-19":[["Malcolm X",1925],["Pol Pot",1925],["Jim Lehrer",1934]],"05-20":[["David A Paterson",1954],["Cher",1946],["Vladimiro Montesinos",1946]],"05-21":[["Mary Robinson",1944]],"05-22":[["Richard Wagner",1813],["Arthur Conan Doyle",1859],["Mary Cassatt",1844]],"05-23":[["Robert A M Stern",1939],["Joan Collins",1933],["Rosemary Clooney",1928]],"05-24":[["Bob Dylan",1941],["William Trevor",1928],["Joseph Brodsky",1940]],"05-25":[["Beverly Sills",1929],["Ian McKellen",1939],["Raymond Carver",1938]],"05-26":[["Miles Davis",1926],["John Wayne",1907],["William Bolcom",1938]],"05-27":[["Isadora Duncan",1877],["Sumner M Redstone",1923],["Henry A Kissinger",1923]],"05-28":[["Charles J Hynes",1935],["Gyorgy Ligeti",1923],["Bulent Ecevit",1925]],"05-29":[["John Fitzgerald Kennedy",1917],["Bob Hope",1903],["Felix G Rohatyn",1928]],"05-30":[["Anthony D Marshall",1924],["Larry A Silverstein",1931],["Benny Goodman",1909]],"05-31":[["Clint Eastwood",1930],["Walt Whitman",1819],["Ellsworth Kelly",1923]],"06-01":[["Morgan Freeman",1937],["Marilyn Monroe",1926],["James H Billington",1929]],"06-02":[["William H Donaldson",1931],["Carol Shields",1935],["Frank Rich",1949]],"06-03":[["Rafael Nadal",1986],["Donald Judd",1928],["Allen Ginsberg",1926]],"06-04":[["Angelina Jolie",1975],["Mortimer B Zuckerman",1937],["Ruth Westheimer",1928]],"06-05":[["John Maynard Keynes",1883],["Federico Garcia Lorca",1898],["Bill Moyers",1934]],"06-06":[["Thomas Mann",1875],["Kirk Kerkorian",1917],["Eli Broad",1933]],"06-07":[["Paul Gauguin",1848],["Dean Martin",1917],["Neeme Jarvi",1937]],"06-08":[["Kanye West",1977],["Frank Lloyd Wright",1867],["Joan Rivers",1933]],"06-09":[["Johnny Depp",1963],["Cole Porter",1891],["Charles Wuorinen",1938]],"06-10":[["Eliot L Spitzer",1959],["Saul Bellow",1915],["Maurice Sendak",1928]],"06-11":[["Richard Strauss",1864],["Charles B Rangel",1930],["Betsy Gotbaum",1938]],"06-12":[["Anne Frank",1929],["Egon Schiele",1890],["George Bush",1924]],"06-13":[["William Butler Yeats",1865],["Samak Sundaravej",1935],["Eleanor Holmes Norton",1937]],"06-14":[["Harriet Beecher Stowe",1811],["Steny H Hoyer",1939],["Joseph M Arpaio",1932]],"06-15":[["Mario M Cuomo",1932],["Ward Connerly",1939],["Ezer Weizman",1924]],"06-16":[["Joyce Carol Oates",1938],["Irving Penn",1917],["Eileen Atkins",1934]],"06-17":[["Igor Stravinsky",1882],["John P Murtha",1932],["Ken Loach",1936]],"06-18":[["Paul McCartney",1942],["Robert Mondavi",1913],["Fernando Henrique Cardoso",1931]],"06-19":[["Lou Gehrig",1903],["Robert S McNamara",1916],["Charles Gwathmey",1938]],"06-20":[["Nicole Kidman",1967],["Jean-Marie Le Pen",1928],["Olympia Dukakis",1931]],"06-21":[["Dan Burton",1938],["Al Hirschfeld",1903],["Ian McEwan",1948]],"06-22":[["Meryl Streep",1949],["Dianne Feinstein",1933],["Billy Wilder",1906]],"06-23":[["Martti Ahtisaari",1937],["Bob Fosse",1927],["Milt Hinton",1910]],"06-24":[["George E Pataki",1945],["Claude Chabrol",1930],["Pete Hamill",1935]],"06-25":[["George Orwell",1903],["Sidney Lumet",1924],["Larry Kramer",1935]],"06-26":[["Claudio Abbado",1933],["Charles S Robb",1939],["Salvador Allende Gossens",1908]],"06-27":[["Philip Guston",1913],["Bruce Babbitt",1938],["Ross Perot",1930]],"06-28":[["Peter Paul Rubens",1577],["Carl Levin",1934],["Mel Brooks",1926]],"06-29":[["Frank Loesser",1910],["Ann M Veneman",1949],["Chandrika Kumaratunga",1945]],"06-30":[["Michael Phelps",1985],["Czeslaw Milosz",1911],["Lena Horne",1917]],"07-01":[["Diane Ravitch",1938],["Hans Werner Henze",1926],["Twyla Tharp",1941]],"07-02":[["Thurgood Marshall",1908],["Michael N Castle",1939],["Medgar Evers",1925]],"07-03":[["Tom Cruise",1962],["Franz Kafka",1883],["Tom Stoppard",1937]],"07-04":[["Neil Simon",1927],["George Vecsey",1939],["Louis Armstrong",1900]],"07-05":[["Jean Cocteau",1889],["Nita M Lowey",1937],["Eliot Feld",1942]],"07-06":[["Sylvester Stallone",1946],["George W Bush",1946],["Dalai Lama",1935]],"07-07":[["Ringo Starr",1940],["Gustav Mahler",1860],["Marc Chagall",1887]],"07-08":[["Philip Johnson",1906],["John D Dingell",1926],["Nelson Aldrich Rockefeller",1908]],"07-09":[["Tom Hanks",1956],["Donald H Rumsfeld",1932],["Brian Dennehy",1938]],"07-10":[["Marcel Proust",1871],["David N Dinkins",1927],["Alice Munro",1931]],"07-11":[["John Quincy Adams",1767],["Harold Bloom",1930],["Nan Robertson",1926]],"07-12":[["Henry David Thoreau",1817],["Bruno Schulz",1892],["Amedeo Modigliani",1884]],"07-13":[["Harrison Ford",1942],["Jack F Kemp",1935],["Wole Soyinka",1934]],"07-14":[["Gustav Klimt",1862],["Gerald Rudolph Jr Ford",1913],["Ingmar Bergman",1918]],"07-15":[["Rembrandt Harmenszoon van Rijn",1606],["Ali Khamenei",1939],["Iris Murdoch",1919]],"07-16":[["Yasuo Fukuda",1936],["Anita Brookner",1928],["Pinchas Zukerman",1948]],"07-17":[["Donald Sutherland",1935],["Juan Antonio Samaranch",1920],["Peter Schickele",1935]],"07-18":[["Nelson Mandela",1918],["Hunter S Thompson",1937],["Kurt Masur",1927]],"07-19":[["Edgar Degas",1834],["George S McGovern",1922],["Joseph E Persico",1930]],"07-20":[["Cormac McCarthy",1933],["Dan Rooney",1932],["Barbara A Mikulski",1936]],"07-21":[["Ernest Hemingway",1899],["Robin Williams",1951],["John D Negroponte",1939]],"07-22":[["Edward Hopper",1882],["Alexander Calder",1898],["Oscar de la Renta",1933]],"07-23":[["Raymond Chandler",1888],["Anthony M Kennedy",1936],["Richard Rogers",1933]],"07-24":[["Amelia Earhart",1897],["Jennifer Lopez",1969],["Alex Katz",1927]],"07-25":[["Thomas Eakins",1844],["Flora Lewis",1922]],"07-26":[["George Bernard Shaw",1856],["Stanley Kubrick",1928],["Sandra Bullock",1964]],"07-27":[["John M Deutch",1938],["Norman Lear",1922],["Alex Rodriguez",1975]],"07-28":[["Marcel Duchamp",1887],["Alberto K Fujimori",1938],["John Ashbery",1927]],"07-29":[["Benito Mussolini",1883],["Peter Jennings",1938],["Elizabeth Dole",1936]],"07-30":[["Arnold Schwarzenegger",1947],["Henry Ford",1863],["Bud Selig",1934]],"07-31":[["Robert M Morgenthau",1919],["Milton Friedman",1912],["Primo Levi",1919]],"08-01":[["Herman Melville",1819],["Melvyn I Weiss",1935],["Meir Kahane",1932]],"08-02":[["John W Snow",1939],["Shimon Peres",1923],["Wes Craven",1939]],"08-03":[["Roland W Burris",1937],["Tony Bennett",1926],["P D James",1920]],"08-04":[["Barack Obama",1961],["Judith S Kaye",1938],["Ali Al- Sistani",1930]],"08-05":[["John Huston",1906],["Herb Brooks",1937],["Gil Garcetti",1941]],"08-06":[["Andy Warhol",1928],["Charlie Haden",1937],["Lucille Ball",1911]],"08-07":[["Charlize Theron",1975],["Don Larsen",1929],["Mickey Kantor",1939]],"08-08":[["Roger Federer",1981],["Dustin Hoffman",1937],["Benny Carter",1907]],"08-09":[["Whitney Houston",1963],["Romano Prodi",1939],["Leonid Kuchma",1938]],"08-10":[["Jack B Weinstein",1921],["Harriet E Miers",1945],["Anwar Ibrahim",1947]],"08-11":[["Jerry Falwell",1933],["Peter Eisenman",1932],["Andre Dubus",1936]],"08-12":[["George Soros",1930],["John M Poindexter",1936],["Dale Bumpers",1925]],"08-13":[["Alfred Hitchcock",1899],["Fidel Castro",1926],["Roberto Micheletti",1943]],"08-14":[["Wellington Mara",1916],["Louise M Slaughter",1929],["Marty Glickman",1917]],"08-15":[["Ben Affleck",1972],["Napoleon I",1769],["Julia Child",1912]],"08-16":[["James Cameron",1954],["Suzanne Farrell",1945],["Massoud Barzani",1946]],"08-17":[["Robert De Niro",1943],["Mae West",1893],["Jiang Zemin",1926]],"08-18":[["Meriwether Lewis",1774],["Roman Polanski",1933],["Robert Redford",1936]],"08-19":[["Frank McCourt",1930],["Malcolm Forbes",1919],["Franz S Leichter",1930]],"08-20":[["George J Mitchell",1933],["Ron Paul",1935],["Eero Saarinen",1910]],"08-21":[["Usain Bolt",1986],["Wilt Chamberlain",1936],["Herman Badillo",1929]],"08-22":[["Claude Debussy",1862],["Dorothy Parker",1893],["Deng Xiaoping",1904]],"08-23":[["Kobe Bryant",1978],["Marian Seldes",1928],["Gene Kelly",1912]],"08-24":[["Yasir Arafat",1929],["A S Byatt",1936],["Mel Karmazin",1943]],"08-25":[["Leonard Bernstein",1918],["Ali Akbar Hashemi Rafsanjani",1934],["Regis Philbin",1931]],"08-26":[["Geraldine A Ferraro",1935],["Wolfgang Sawallisch",1923],["Tom Ridge",1945]],"08-27":[["Man Ray",1890],["Lyndon Baines Johnson",1908],["Teresa (Mother)",1910]],"08-28":[["Johann Wolfgang von Goethe",1749],["Paul Martin",1938],["Marvin Davis",1925]],"08-29":[["Michael Jackson",1958],["Preston Sturges",1898],["Robert E Rubin",1938]],"08-30":[["Warren E Buffett",1930],["Ted Williams",1918],["Geoffrey Beene",1924]],"08-31":[["Alan Jay Lerner",1918],["Tom Coughlin",1946],["Richard Gere",1949]],"09-01":[["Alan M Dershowitz",1938],["Lily Tomlin",1939],["Seiji Ozawa",1935]],"09-02":[["Keanu Reeves",1964],["D Wayne Lukas",1935],["Andrew S Grove",1936]],"09-03":[["Caryl Churchill",1938],["Kitty Carlisle Hart",1910],["Alison Lurie",1926]],"09-04":[["Leo Castelli",1907],["Craig Claiborne",1920],["Harold M Ickes",1939]],"09-05":[["Paul A Volcker",1927],["John Cage",1912],["Jack Valenti",1921]],"09-06":[["Frank Stronach",1932]],"09-07":[["Sonny Rollins",1930],["Elia Kazan",1909],["Daniel K Inouye",1924]],"09-08":[["Michael Frayn",1933],["Christoph von Dohnanyi",1929],["Sid Caesar",1922]],"09-09":[["Leo Tolstoy",1828],["Elie Wiesel",1928],["Sol LeWitt",1928]],"09-10":[["Karl Lagerfeld",1933],["Arnold Palmer",1929],["Roger Maris",1934]],"09-11":[["Ferdinand E Marcos",1917],["Theodore B Olson",1940],["Brian de Palma",1940]],"09-12":[["Henry A Waxman",1939],["Richard D Lamm",1935],["Michael Ondaatje",1943]],"09-13":[["Arnold Schoenberg",1874],["Leon Levy",1925],["Bill Janklow",1939]],"09-14":[["Renzo Piano",1937],["Constance Baker Motley",1921],["Anne Bernays",1930]],"09-15":[["Agatha Christie",1890],["Jean Renoir",1894],["Charles L Mee",1938]],"09-16":[["Lauren Bacall",1924],["B B King",1925],["Kenneth G Langone",1935]],"09-17":[["Charles E Grassley",1933],["David H Souter",1939],["Robert B Parker",1932]],"09-18":[["Greta Garbo",1905],["Scotty Bowman",1933],["Lance Armstrong",1971]],"09-19":[["Marge Roukema",1929],["Wen Jiabao",1942],["Jeremy Irons",1948]],"09-20":[["Sani Abacha",1943],["Burhanuddin Rabbani",1940],["Joseph J DioGuardi",1940]],"09-21":[["Stephen King",1947],["Leonard Cohen",1934],["Chuck Jones",1912]],"09-22":[["Gerald Schoenfeld",1924],["Fay Weldon",1931],["Tommy Lasorda",1927]],"09-23":[["Bruce Springsteen",1949],["Ray Charles",1930],["John Coltrane",1926]],"09-24":[["F Scott Fitzgerald",1896],["Ruhollah Khomeini",1900],["Leon Klinghoffer",1916]],"09-25":[["Will Smith",1968],["William Faulkner",1897],["Jean-Philippe Rameau",1683]],"09-26":[["Serena Williams",1981],["George Gershwin",1898],["Thomas Stearns Eliot",1888]],"09-27":[],"09-28":[["Brigitte Bardot",1934],["Marcello Mastroianni",1924],["Samuel Zell",1941]],"09-29":[["Caravaggio",1571],["Silvio Berlusconi",1936],["Michelangelo Antonioni",1912]],"09-30":[["Truman Capote",1924],["Ehud Olmert",1945],["L Paul III Bremer",1941]],"10-01":[["Jimmy Carter",1924],["William H Rehnquist",1924],["Julie Andrews",1935]],"10-02":[["Mohandas K Gandhi",1869],["Groucho Marx",1890],["Graham Greene",1904]],"10-03":[["Pierre Bonnard",1867],["Steve Reich",1936],["David R Obey",1938]],"10-04":[["Charlton Heston",1923],["Sam Wyly",1934],["Lee P Brown",1937]],"10-05":[["Teresa Heinz Kerry",1938],["Barry Switzer",1937],["Peter Ackroyd",1949]],"10-06":[["Le Corbusier",1887],["Louis Begley",1933],["Hafez Al- Assad",1930]],"10-07":[["Charles Dutoit",1936],["Amiri Baraka",1934],["Desmond M Tutu",1931]],"10-08":[["Matt Damon",1970],["Juan Domingo Peron",1895],["Lynne F Stewart",1939]],"10-09":[["John Lennon",1940],["Trent Lott",1941]],"10-10":[["Giuseppe Verdi",1813],["Thelonious Monk",1917],["Harold Pinter",1930]],"10-11":[["Eleanor Roosevelt",1884],["Jerome Robbins",1918],["Elmore Leonard",1925]],"10-12":[["Richard Meier",1934],["Murray Chass",1938],["Luciano Pavarotti",1935]],"10-13":[["Yves Montand",1921],["Margaret H Thatcher",1925],["Lenny Bruce",1925]],"10-14":[["Dwight David Eisenhower",1890],["Lillian Gish",1893],["Ralph Lauren",1939]],"10-15":[["John Kenneth Galbraith",1908],["Mario Puzo",1920],["Peter Gotti",1939]],"10-16":[["Oscar Wilde",1854],["Charles F Dolan",1926],["Gunter Grass",1927]],"10-17":[["Eminem",1972],["Arthur Miller",1915],["Zhao Ziyang",1919]],"10-18":[["Frederick A O Jr Schwarz",1836],["Mike Ditka",1939],["Jesse Helms",1921]],"10-19":[["John Le Carre",1931],["Peter Max",1937],["John Lithgow",1945]],"10-20":[["Charles Edward Ives",1874],["Mickey Mantle",1931],["Jerry Orbach",1935]],"10-21":[["Dizzy Gillespie",1917],["Celia Cruz",1925],["Georg Solti",1912]],"10-22":[["Catherine Deneuve",1943],["Franz Liszt",1811],["Robert Rauschenberg",1925]],"10-23":[["Johnny Carson",1925],["Jim Bunning",1931],["Ned Rorem",1923]],"10-24":[["Luciano Berio",1925],["Tony Walton",1934],["Moss Hart",1904]],"10-25":[["Pablo Picasso",1881],["Georges Bizet",1838],["Barbara Cook",1927]],"10-26":[["Hillary Rodham Clinton",1947],["Mohammed Riza Pahlevi",1919],["Deborah T Poritz",1936]],"10-27":[["Theodore Roosevelt",1858],["Roy Lichtenstein",1923],["Sylvia Plath",1932]],"10-28":[["Bill Gates",1955],["Julia Roberts",1967],["Lenny Wilkens",1937]],"10-29":[["Dominick Dunne",1925],["Necmettin Erbakan",1926],["Yevgeny M Primakov",1929]],"10-30":[["Diego Maradona",1960],["Ezra Pound",1885],["Dick Vermeil",1936]],"10-31":[["Peter Jackson",1961],["Jan Vermeer",1632],["Dan Rather",1931]],"11-01":[["Bernard Kouchner",1939],["A R Gurney",1930],["Edward W Said",1935]],"11-02":[["Richard Serra",1939],["Patrick J Buchanan",1938],["Burt Lancaster",1913]],"11-03":[["Terrence McNally",1938],["Walker Evans",1903],["Michael S Dukakis",1933]],"11-04":[["Walter Cronkite",1916],["Bernard F Law",1931],["John Herbers",1923]],"11-05":[["Thomas R Pickering",1931],["Roy Rogers",1911],["Peter Pace",1945]],"11-06":[["Mike Nichols",1931],["Michael Schwerner",1939],["Derrick Bell",1930]],"11-07":[["Albert Camus",1913],["Billy Graham",1918],["Joan Sutherland",1926]],"11-08":[["Dorothy Day",1897],["Bobby Bowden",1929],["Margaret Mitchell",1900]],"11-09":[["Stanford White",1853],["Bob Graham",1936],["Spiro T Agnew",1918]],"11-10":[["Betty Currie",1939],["Askar Akayev",1944],["Saxby Chambliss",1943]],"11-11":[["Leonardo DiCaprio",1974],["Fyodor Dostoyevsky",1821],["Kurt Vonnegut",1922]],"11-12":[["Auguste Rodin",1840],["Jalal Talabani",1933],["Charles Manson",1934]],"11-13":[["Garry Marshall",1934],["Peter Arnett",1934],["Mel Stottlemyre",1941]],"11-14":[["Claude Monet",1840],["Aaron Copland",1900],["Joseph R McCarthy",1908]],"11-15":[["Mwai Kibaki",1931],["Howard H Jr Baker",1925],["Bill Richardson",1947]],"11-16":[["George S Kaufman",1889],["Jose Saramago",1922],["L Dennis Kozlowski",1946]],"11-17":[["Martin Scorsese",1942],["Isamu Noguchi",1904],["James M Inhofe",1934]],"11-18":[["William S Gilbert",1836],["Ted Stevens",1923],["Margaret Atwood",1939]],"11-19":[["Tom Harkin",1939],["Larry King",1933],["Ted Turner",1938]],"11-20":[["Robert Francis Kennedy",1925],["Fred Wilpon",1936],["Robert C Byrd",1917]],"11-21":[["Isaac Bashevis Singer",1902],["Tina Howe",1937],["Richard J Durbin",1944]],"11-22":[["Charles de Gaulle",1890],["Scarlett Johansson",1984],["Benjamin Britten",1913]],"11-23":[["Nadine Gordimer",1923],["Guy V Molinari",1928],["Joe Eszterhas",1944]],"11-24":[["John V Lindsay",1921],["John J Rigas",1924],["Alfred Schnittke",1934]],"11-25":[["Andrew Carnegie",1835],["Virgil Thomson",1896],["Trisha Brown",1936]],"11-26":[["Porter J Goss",1938],["Tina Turner",1939],["Eugene Ionesco",1909]],"11-27":[["David Merrick",1911],["Laurent Kabila",1939],["Richard J Codey",1946]],"11-28":[["Wilbur L Jr Ross",1937],["Gary Hart",1936],["Carol Gilligan",1936]],"11-29":[["Louisa May Alcott",1832],["Gaetano Donizetti",1797],["Jacques Chirac",1932]],"11-30":[["Ridley Scott",1937],["Winston Leonard Spencer Churchill",1874],["Samuel Langhorne Clemens",1835]],"12-01":[["Woody Allen",1935],["James D Wolfensohn",1933],["Peter S Kalikow",1942]],"12-02":[["Britney Spears",1981],["Harry Reid",1939],["Maria Callas",1923]],"12-03":[["Jean-Luc Godard",1930],["Saad Eddin Ibrahim",1938],["Kim Dae Jung",1925]],"12-04":[["Jay-Z",1969],["Francisco Franco",1892],["Robert L Vesco",1935]],"12-05":[["Walt Disney",1901],["George Armstrong Custer",1839],["Joan Didion",1934]],"12-06":[["Nikolaus Harnoncourt",1929],["Andrew M Cuomo",1957],["Richard C Breeden",1949]],"12-07":[["Willa Cather",1873],["Ellen Burstyn",1932],["Noam Chomsky",1928]],"12-08":[["Diego Rivera",1886],["Jean Sibelius",1865],["James Thurber",1894]],"12-09":[["Bixente Lizarazu",1969],["John Malkovich",1953],["Judi Dench",1934]],"12-10":[["Emily Dickinson",1830],["Olivier Messiaen",1908],["Yuri Temirkanov",1938]],"12-11":[["Hector Berlioz",1803],["Fiorello H la Guardia",1882],["Elliott Carter",1908]],"12-12":[["Gustave Flaubert",1821],["Edvard Munch",1863],["Frank Sinatra",1915]],"12-13":[["Christopher Plummer",1929],["Larry Doby",1923],["George P Shultz",1920]],"12-14":[["Don Hewitt",1922],["Etienne Tshisekedi",1932],["Michael Ovitz",1946]],"12-15":[["Kathleen Babineaux Blanco",1942],["Jim Leyland",1944],["Art Howe",1946]],"12-16":[["Ludwig van Beethoven",1770],["Jane Austen",1775],["Noel Coward",1899]],"12-17":[["William Safire",1929],["Penelope Fitzgerald",1916],["Chris Matthews",1945]],"12-18":[["Steven Spielberg",1946],["Brad Pitt",1963],["Joseph Stalin",1878]],"12-19":[["Lee Myung-bak",1941],["James L Jones",1943]],"12-20":[["Calvert Vaux",1824],["John Harbison",1938],["William Julius Wilson",1935]],"12-21":[["Joe Paterno",1926],["Jane Fonda",1937],["Wen Ho Lee",1939]],"12-22":[["Giacomo Puccini",1858],["Lady Bird Johnson",1912],["Lucien Bouchard",1938]],"12-23":[["Akihito",1933],["John E Sprizzo",1934],["David G Trager",1937]],"12-24":[["Mary Higgins Clark",1927],["Joseph Cornell",1903],["Marylou Whitney",1925]],"12-25":[["Isaac Newton",1642],["Humphrey Bogart",1899],["Louise Bourgeois",1911]],"12-26":[["Mao Zedong",1893],["Phil Spector",1939],["Gnassingbe Eyadema",1935]],"12-27":[["Marlene Dietrich",1901],["Thomas M Menino",1942],["Nolan Richardson",1941]],"12-28":[["Denzel Washington",1954],["Woodrow Wilson",1856],["Stan Lee",1922]],"12-29":[["Andrew Johnson",1808],["Jon Voight",1938],["Mary Tyler Moore",1936]],"12-30":[["Tiger Woods",1975],["LeBron James",1984],["Rudyard Kipling",1865]],"12-31":[["Henri Matisse",1869],["Anthony Hopkins",1937],["Jule Styne",1905]]}

const fm = FileManager.local()
const settingsPath = fm.joinPath(
  fm.documentsDirectory(),
  "tu-as-vecu-combien.json"
)

let saved = null
if (fm.fileExists(settingsPath)) {
  try { saved = JSON.parse(fm.readString(settingsPath)) } catch (_) {}
}

let birthDate

if (saved?.birthDate) {
  const alert = new Alert()
  alert.title = "Tu as vécu combien ?"
  alert.message = `Date enregistrée : ${formatFrenchDate(new Date(saved.birthDate))}`
  alert.addAction("Voir mon résultat")
  alert.addAction("Modifier la date")
  alert.addCancelAction("Annuler")

  const choice = await alert.presentAlert()
  if (choice === -1) {
    Script.complete()
    return
  }

  birthDate = choice === 0
    ? new Date(saved.birthDate)
    : await askBirthDate()
} else {
  birthDate = await askBirthDate()
}

if (!birthDate) {
  Script.complete()
  return
}

const now = new Date()

if (birthDate > now) {
  const alert = new Alert()
  alert.title = "Date invalide"
  alert.message = "Ta date de naissance ne peut pas être dans le futur."
  alert.addAction("OK")
  await alert.presentAlert()
  Script.complete()
  return
}

fm.writeString(
  settingsPath,
  JSON.stringify({ birthDate: birthDate.toISOString() })
)

const millisecondsLived = now.getTime() - birthDate.getTime()
const secondsLived = Math.floor(millisecondsLived / 1000)
const minutesLived = Math.floor(secondsLived / 60)
const hoursLived = Math.floor(minutesLived / 60)
const daysLived = millisecondsLived / 86_400_000
const completeDaysLived = Math.floor(daysLived)
const yearsLived = daysLived / 365.2425
const monthsLived = Math.min(1200, Math.floor(daysLived / 30.436875))
const monthsRemaining = Math.max(0, 1200 - monthsLived)

const sleepYears =
  (daysLived * (CONFIG.sleepHoursPerDay / 24)) / 365.2425

const awakeMinutes =
  daysLived * (24 - CONFIG.sleepHoursPerDay) * 60

const heartbeats = minutesLived * CONFIG.heartbeatsPerMinute
const breaths = minutesLived * CONFIG.breathsPerMinute
const blinks = awakeMinutes * CONFIG.blinksPerMinuteAwake
const walkingKm = daysLived * CONFIG.walkingKmPerDay
const earthTours = walkingKm / 40_075
const toiletDays = (daysLived * CONFIG.toiletMinutesPerDay) / 1440
const earthDistance = yearsLived * CONFIG.earthOrbitKmPerYear
const lifeUsedPercent = Math.min(100, monthsLived / 12)

const birthdayStars = getBirthdayStars(birthDate)

const webView = new WebView()
await webView.loadHTML(createHTML({
  birthDate,
  birthTimestamp: birthDate.getTime(),
  secondsLived,
  minutesLived,
  hoursLived,
  completeDaysLived,
  sleepYears,
  heartbeats,
  breaths,
  blinks,
  walkingKm,
  earthTours,
  toiletDays,
  earthDistance,
  lifeUsedPercent,
  monthsLived,
  monthsRemaining,
  birthdayStars
}))

await webView.present(true)
Script.complete()

async function askBirthDate() {
  const picker = new DatePicker()
  picker.title = "Ta date de naissance"
  picker.message = "Cette date reste uniquement enregistrée sur ton iPhone."
  picker.initialDate = new Date(1990, 0, 1)
  picker.maximumDate = new Date()
  return await picker.pickDate()
}

function getBirthdayStars(date) {
  const key =
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")

  return BIRTHDAY_STARS[key] || []
}

function googleURL(name) {
  return "https://www.google.com/search?q=" +
    encodeURIComponent(name)
}

function createHTML(data) {
  const starsHTML = data.birthdayStars.map(([name, year], index) => `
    <a class="person" href="${googleURL(name)}" onclick="openGoogle(event, this.href)">
      <div class="person-index">${String(index + 1).padStart(2, "0")}</div>
      <div class="person-main">
        <div class="person-name">${escapeHTML(name)}</div>
        <div class="person-sub">Né en ${year}</div>
      </div>
      <div class="search-link">Google ↗</div>
    </a>
  `).join("")

  const gridHTML = Array.from({ length: 1200 }, (_, index) => {
    const state =
      index < data.monthsLived ? "lived" :
      index === data.monthsLived ? "current" :
      "future"

    return `<span class="month ${state}" data-index="${index}"></span>`
  }).join("")

  const cards = [
    statCard(
      "✦",
      "Depuis ta naissance",
      formatNumber(data.completeDaysLived),
      "jours vécus",
      `${formatNumber(data.hoursLived)} heures · ${formatNumber(data.minutesLived)} minutes`,
      1
    ),

    `
    <section class="screen">
      ${ambientHTML(2)}
      <div class="card seconds-card">
        <div class="icon">⌛</div>
        <p class="eyebrow">Pendant ce temps</p>
        <div class="stat-value live-main exact-seconds" id="liveSecondsCompact">
          ${formatNumber(data.secondsLived)}
        </div>
        <div class="stat-unit">secondes vécues</div>
        <div class="human-breakdown" id="liveSecondsHuman"></div>
        <div class="breakdown" id="liveSecondsBreakdown">
          ${formatNumberBreakdown(data.secondsLived)}
        </div>
        <p class="description">Et le compteur continue vraiment de tourner.</p>
      </div>
      ${tapHintHTML()}
    </section>
    `,

    `
    <section class="screen">
      ${ambientHTML(3)}
      <div class="card birthday-card">
        <div class="icon">🎂</div>
        <p class="eyebrow">Coïncidence cosmique</p>
        <h2>Tu es né le même jour que…</h2>
        <div class="people-list">${starsHTML}</div>
        <p class="description small-note">
          Touchez un nom pour le rechercher sur Google.
        </p>
      </div>
      ${tapHintHTML()}
    </section>
    `,

    adjustableCard({
      ambient: 3,
      icon: "☾",
      eyebrow: "Tu as probablement dormi",
      value: formatNumber(data.sleepYears, 1),
      unit: "années",
      valueId: "sleepValue",
      descriptionId: "sleepDescription",
      description: "Avec une moyenne de 8 h de sommeil par nuit.",
      sliderId: "sleepSlider",
      sliderLabel: "Sommeil moyen",
      sliderValueId: "sleepSliderValue",
      min: 4,
      max: 12,
      step: 0.25,
      initial: 8,
      suffix: " h / nuit"
    }),

    adjustableCard({
      ambient: 1,
      icon: "♥",
      eyebrow: "Ton cœur a battu",
      value: formatNumber(data.heartbeats),
      unit: "fois",
      valueId: "heartValue",
      descriptionId: "heartDescription",
      description: "Avec une moyenne de 72 battements par minute.",
      sliderId: "heartSlider",
      sliderLabel: "Rythme cardiaque moyen",
      sliderValueId: "heartSliderValue",
      min: 45,
      max: 110,
      step: 1,
      initial: 72,
      suffix: " bpm"
    }),

    adjustableCard({
      ambient: 2,
      icon: "◌",
      eyebrow: "Tu as respiré",
      value: formatNumber(data.breaths),
      unit: "fois",
      valueId: "breathValue",
      descriptionId: "breathDescription",
      description: "Avec une moyenne de 16 respirations par minute.",
      sliderId: "breathSlider",
      sliderLabel: "Respiration moyenne",
      sliderValueId: "breathSliderValue",
      min: 8,
      max: 25,
      step: 1,
      initial: 16,
      suffix: " / min"
    }),

    adjustableCard({
      ambient: 3,
      icon: "◉",
      eyebrow: "Tu as cligné des yeux",
      value: formatNumber(data.blinks),
      unit: "fois",
      valueId: "blinkValue",
      descriptionId: "blinkDescription",
      description: "Avec 15 clignements par minute éveillée.",
      sliderId: "blinkSlider",
      sliderLabel: "Clignements moyens",
      sliderValueId: "blinkSliderValue",
      min: 5,
      max: 30,
      step: 1,
      initial: 15,
      suffix: " / min éveillée"
    }),

    adjustableCard({
      ambient: 1,
      icon: "↗",
      eyebrow: "Tu as probablement marché",
      value: formatNumber(data.walkingKm),
      unit: "kilomètres",
      valueId: "walkValue",
      descriptionId: "walkDescription",
      description: `Environ ${formatNumber(data.earthTours, 1)} tours de la Terre.`,
      sliderId: "walkSlider",
      sliderLabel: "Distance moyenne",
      sliderValueId: "walkSliderValue",
      min: 0.5,
      max: 15,
      step: 0.5,
      initial: 4.5,
      suffix: " km / jour"
    }),

    adjustableCard({
      ambient: 2,
      icon: "◇",
      eyebrow: "Tu as passé environ",
      value: formatNumber(data.toiletDays),
      unit: "jours aux toilettes",
      valueId: "toiletValue",
      descriptionId: "toiletDescription",
      description: "Avec une moyenne de 30 minutes par jour.",
      sliderId: "toiletSlider",
      sliderLabel: "Temps moyen",
      sliderValueId: "toiletSliderValue",
      min: 5,
      max: 90,
      step: 5,
      initial: 30,
      suffix: " min / jour"
    }),

    statCard("◎", "La Terre a parcouru", formatCompact(data.earthDistance), "kilomètres",
      "Autour du Soleil pendant que tu vivais ta vie.", 3)
  ]

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<style>
:root {
  color-scheme: dark;
  --bg: #050609;
  --text: #f8f7f4;
  --muted: rgba(248,247,244,.55);
  --border: rgba(255,255,255,.12);
}
* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
html, body {
  width: 100%; height: 100%; margin: 0; overflow: hidden;
  background: var(--bg); color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", sans-serif;
}
a { color: inherit; text-decoration: none; }
.progress {
  position: fixed; z-index: 100;
  top: calc(env(safe-area-inset-top, 16px) + 13px);
  left: 20px; right: 20px; height: 3px;
  overflow: hidden; border-radius: 99px;
  background: rgba(255,255,255,.13);
}
.progress-bar {
  width: 0; height: 100%; border-radius: inherit;
  background: linear-gradient(90deg,#fff,#c9bbff,#fff);
  transition: width .6s cubic-bezier(.2,.8,.2,1);
}
.screen {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  padding: calc(env(safe-area-inset-top,20px) + 58px) 22px
           calc(env(safe-area-inset-bottom,20px) + 45px);
  opacity: 0; pointer-events: none;
  transform: scale(1.025) translateY(12px);
  transition: opacity .55s ease, transform .72s cubic-bezier(.16,1,.3,1);
}
.screen.active { opacity: 1; pointer-events: auto; transform: scale(1) translateY(0); }
.ambient {
  position: absolute; width: 570px; height: 570px; border-radius: 50%;
  filter: blur(90px); opacity: .25; pointer-events: none;
  animation: breathe 6s ease-in-out infinite alternate;
}
.ambient-1 { top: -260px; right: -260px; background: #544cff; }
.ambient-2 { left: -250px; bottom: -260px; background: #9f50e7; }
.ambient-3 { top: 18%; left: -340px; background: #3268ff; }
@keyframes breathe {
  from { transform: scale(.9); opacity: .17; }
  to { transform: scale(1.15); opacity: .33; }
}
.intro-content, .final-content {
  position: relative; z-index: 2; width: 100%; max-width: 600px; text-align: center;
}
.logo, .icon {
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid var(--border); background: rgba(255,255,255,.065);
  backdrop-filter: blur(22px);
}
.logo { width: 68px; height: 68px; margin-bottom: 32px; border-radius: 23px; font-size: 29px; }
.icon { width: 55px; height: 55px; margin-bottom: 25px; border-radius: 18px; font-size: 24px; }
.intro h1 {
  margin: 0 auto; max-width: 550px;
  font-size: clamp(52px,14vw,86px); font-weight: 780; line-height: .92;
  letter-spacing: -.075em;
}
.intro-date { margin-top: 28px; color: var(--muted); font-size: 17px; }
button { font-family: inherit; }
.start-button {
  width: 100%; max-width: 380px; margin-top: 48px; padding: 18px 24px;
  border: 0; border-radius: 100px; background: #f8f7f4; color: #08090c;
  font-size: 17px; font-weight: 720;
}
.card {
  position: relative; z-index: 2; width: 100%; max-width: 600px;
  padding: 39px 25px; border: 1px solid var(--border); border-radius: 38px;
  background: linear-gradient(145deg,rgba(255,255,255,.095),rgba(255,255,255,.035));
  text-align: center; backdrop-filter: blur(28px);
  box-shadow: 0 40px 120px rgba(0,0,0,.42), inset 0 1px 0 rgba(255,255,255,.13);
}
.eyebrow {
  margin: 0 0 18px; color: var(--muted); font-size: 14px; font-weight: 680;
  letter-spacing: .11em; text-transform: uppercase;
}
.stat-value {
  overflow-wrap: anywhere; font-size: clamp(48px,13.5vw,86px);
  font-weight: 780; line-height: .96; letter-spacing: -.06em;
  background: linear-gradient(180deg,#fff,rgba(255,255,255,.72));
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.stat-unit {
  margin-top: 12px; font-size: clamp(22px,6vw,34px);
  font-weight: 670; letter-spacing: -.035em;
}
.description {
  max-width: 390px; margin: 28px auto 0; color: var(--muted);
  font-size: 17px; line-height: 1.5;
}
.tap-hint {
  position: absolute; bottom: calc(env(safe-area-inset-bottom,18px) + 15px);
  color: rgba(255,255,255,.32); font-size: 13px;
}
.seconds-card { padding: 31px 21px 29px; }
.live-main {
  white-space: nowrap;
  font-size: clamp(42px,10.8vw,72px);
  font-variant-numeric: tabular-nums;
}
.exact-seconds {
  letter-spacing: -.055em;
}
.exact-number {
  margin-top: 20px; color: rgba(255,255,255,.68);
  font-size: clamp(17px,4.7vw,24px); font-weight: 620;
  font-variant-numeric: tabular-nums;
}
.breakdown {
  margin: 18px auto 0; padding: 16px 12px;
  border-top: 1px solid rgba(255,255,255,.09);
  border-bottom: 1px solid rgba(255,255,255,.09);
  color: rgba(255,255,255,.9); font-size: clamp(16px,4.4vw,22px);
  font-weight: 690; line-height: 1.5; font-variant-numeric: tabular-nums;
}
.tick { animation: tick .32s ease; }
@keyframes tick { 50% { transform: scale(1.018); filter: brightness(1.3); } }




.human-breakdown {
  margin-top: 12px;
  color: rgba(255,255,255,.72);
  font-size: 16px;
  line-height: 1.35;
  font-weight: 620;
}
.human-breakdown span {
  display: block;
}

.adjustable-value {
  white-space: nowrap;
  overflow-wrap: normal;
  word-break: normal;
  font-variant-numeric: tabular-nums;
  font-size: clamp(34px, 9.2vw, 66px);
  letter-spacing: -.055em;
  line-height: 1;
}

.adjustable-card {
  padding: 29px 18px 27px;
}
.adjustable-card .description {
  margin-top: 20px;
}
.slider-panel {
  margin-top: 24px;
  padding: 15px 16px 13px;
  border: 1px solid rgba(255,255,255,.09);
  border-radius: 18px;
  background: rgba(255,255,255,.045);
  text-align: left;
}
.slider-heading {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 11px;
}
.slider-label {
  color: rgba(255,255,255,.55);
  font-size: 12px;
  font-weight: 650;
}
.slider-reading {
  color: rgba(255,255,255,.92);
  font-size: 13px;
  font-weight: 720;
  white-space: nowrap;
}
.metric-slider {
  display: block;
  width: 100%;
  height: 28px;
  margin: 0;
  accent-color: #9d7cff;
}
.metric-slider:focus {
  outline: 2px solid rgba(184,149,255,.55);
  outline-offset: 3px;
}

.birthday-card h2 {
  margin: 0 auto 24px; max-width: 430px;
  font-size: clamp(32px,8.3vw,46px); line-height: 1.02; letter-spacing: -.05em;
}
.people-list { display: flex; flex-direction: column; gap: 11px; text-align: left; }
.person {
  display: flex; align-items: center; gap: 12px; padding: 14px;
  border: 1px solid rgba(255,255,255,.09); border-radius: 19px;
  background: rgba(255,255,255,.045);
}
.person:active { transform: scale(.985); background: rgba(255,255,255,.08); }
.person-index {
  display: flex; width: 39px; height: 39px; flex: 0 0 auto;
  align-items: center; justify-content: center; border-radius: 13px;
  background: rgba(255,255,255,.08); color: rgba(255,255,255,.55);
  font-size: 13px; font-weight: 720;
}
.person-main { min-width: 0; flex: 1; }
.person-name {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  font-size: 17px; font-weight: 720;
}
.person-sub { margin-top: 3px; color: var(--muted); font-size: 13px; }
.search-link { color: rgba(255,255,255,.55); font-size: 11px; white-space: nowrap; }
.small-note { margin-top: 18px; font-size: 13px; }

/* Carte finale 9:16 */
.final-screen { padding: calc(env(safe-area-inset-top,20px) + 45px) 18px 20px; }
.story-card {
  position: relative; z-index: 2; width: min(100%, 430px);
  aspect-ratio: 9 / 16; max-height: calc(100vh - 90px);
  padding: 24px 22px 18px; overflow: hidden;
  display: flex; flex-direction: column;
  border: 1px solid rgba(255,255,255,.13); border-radius: 34px;
  background:
    radial-gradient(circle at 90% 0%, rgba(112,79,255,.30), transparent 34%),
    radial-gradient(circle at 0% 100%, rgba(176,72,222,.20), transparent 34%),
    linear-gradient(165deg,#11111a,#07070b 55%,#020204);
  box-shadow: 0 35px 100px rgba(0,0,0,.55);
}
.story-kicker {
  color: rgba(255,255,255,.52); font-size: 11px;
  font-weight: 750; letter-spacing: .16em; text-transform: uppercase;
}
.story-title {
  margin-top: 8px; font-size: clamp(28px,7vw,40px);
  font-weight: 800; letter-spacing: -.055em;
}
.story-number {
  margin-top: 14px; font-size: clamp(46px,13vw,72px);
  font-weight: 820; line-height: .9; letter-spacing: -.07em;
}
.story-number span {
  display: block; margin-top: 8px; color: rgba(255,255,255,.52);
  font-size: 13px; font-weight: 650; letter-spacing: 0;
}
.life-grid {
  display: grid;
  grid-template-columns: repeat(40, 1fr);
  gap: 1.5px;
  margin: 16px auto 10px;
  width: 96%;
  contain: layout paint;
  transform: translateZ(0);
}
.month {
  aspect-ratio:1;
  border-radius:1.5px;
  transform:translateZ(0);
  backface-visibility:hidden;
}
.month.future{
  background:rgba(255,255,255,.10);
  opacity:.9;
}
.month.lived{
  background:linear-gradient(145deg,#b895ff,#6e55ff);
  opacity:0;
  transition:opacity 7s ease;
}
.month.lived.show{
  opacity:1;
}
.month.current{
  background:#fff;
  opacity:1;
}
.month.current.pulse{
  box-shadow:0 0 10px rgba(255,255,255,.95);
  animation:pulseMonth 1.2s ease-in-out infinite alternate;
}
@keyframes pulseMonth {
  from { transform: scale(.75); opacity: .65; }
  to { transform: scale(1.35); opacity: 1; }
}
.story-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  margin-top: 10px;
}
.story-stat {
  padding: 9px 8px;
  border: 1px solid rgba(255,255,255,.09);
  border-radius: 14px;
  background: rgba(255,255,255,.04);
}
.story-stat strong {
  display: block; font-size: 19px; letter-spacing: -.035em;
}
.story-stat span {
  display: block; margin-top: 2px; color: rgba(255,255,255,.46); font-size: 10px;
}
.story-line {
  flex: 0 0 auto;
  margin-top: 10px;
  padding: 0 2px;
  color: rgba(255,255,255,.82);
  font-size: 11.5px;
  line-height: 1.35;
}
.story-signature {
  display: none;
}
.capture-button {
  position: absolute; z-index: 5; right: 28px;
  bottom: calc(env(safe-area-inset-bottom,10px) + 12px);
  padding: 11px 15px; border: 1px solid rgba(255,255,255,.14);
  border-radius: 99px; background: rgba(20,20,28,.8); color: white;
  font-size: 12px; font-weight: 700; backdrop-filter: blur(20px);
}
body.capture .progress,
body.capture .capture-button { display: none; }
body.capture .final-screen { padding-top: 8px; padding-bottom: 8px; }
body.capture .story-card { max-height: calc(100vh - 16px); }

@media (max-height: 720px) {
  .card { padding-top: 25px; padding-bottom: 24px; }
  .icon { width: 47px; height: 47px; margin-bottom: 16px; }
  .description { margin-top: 18px; }
  .person { padding: 10px 11px; }
  .story-card { padding-top: 18px; padding-bottom: 14px; }
  .life-grid { margin-top: 13px; margin-bottom: 11px; gap: 1.5px; }
  .story-stats { margin-top: 11px; gap: 7px; }
  .story-stat { padding: 9px 7px; }
  .story-line { margin-top: 9px; font-size: 11px; }
  .story-signature { padding-top: 7px; font-size: 8px; }
}
</style>
</head>
<body>
<div class="progress"><div class="progress-bar" id="progressBar"></div></div>

<section class="screen intro active">
  ${ambientHTML(1)}
  ${ambientHTML(2)}
  <div class="intro-content">
    <div class="logo">⌛</div>
    <h1>Ta vie en quelques chiffres…</h1>
    <p class="intro-date">Né le ${escapeHTML(formatFrenchDate(data.birthDate))}</p>
    <button class="start-button" onclick="nextScreen()">Découvrir</button>
  </div>
</section>

${cards.join("\n")}

<section class="screen final-screen">
  <div class="story-card">
    <div class="story-kicker">Si tu vis 100 ans</div>
    <div class="story-title">Tu as vécu combien ?</div>

    <div class="story-number">
      ${formatNumber(data.completeDaysLived)}
      <span>jours vécus</span>
    </div>

    <div class="life-grid" id="lifeGrid">
      ${gridHTML}
    </div>

    <div class="story-stats">
      <div class="story-stat">
        <strong>${data.monthsLived}</strong>
        <span>mois déjà vécus</span>
      </div>
      <div class="story-stat">
        <strong>${data.monthsRemaining}</strong>
        <span>mois jusqu’à 100 ans</span>
      </div>
      <div class="story-stat">
        <strong>${formatNumber(data.lifeUsedPercent,1)} %</strong>
        <span>de 100 ans</span>
      </div>
      <div class="story-stat">
        <strong>${formatLargeNumber(data.secondsLived)}</strong>
        <span>secondes vécues</span>
      </div>
    </div>

    <div class="story-line">
      Chaque carré représente un mois.<br>
      Le carré blanc, c’est maintenant.
    </div>

  </div>

  <button class="capture-button" onclick="toggleCapture(event)">
    Mode capture
  </button>
</section>

<script>
const screens = Array.from(document.querySelectorAll(".screen"))
const progressBar = document.getElementById("progressBar")
const compact = document.getElementById("liveSecondsCompact")
const breakdown = document.getElementById("liveSecondsBreakdown")
const birthTimestamp = ${data.birthTimestamp}
const totalDaysLived = ${data.completeDaysLived}
const totalMinutesLived = ${data.minutesLived}

let currentScreen = 0
let locked = false
let gridAnimated = false

function exactNumber(value) {
  const rounded = Math.round(Number(value))
  return String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, "\u202F")
}

function compactNumber(value) {
  const format = n => new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(n)

  if (value >= 1e9) return format(value / 1e9) + " milliard" + (value >= 2e9 ? "s" : "")
  if (value >= 1e6) return format(value / 1e6) + " millions"
  if (value >= 1e3) return format(value / 1e3) + " milliers"
  return exactNumber(value)
}

function breakdownNumber(value) {
  let rest = Math.floor(value)
  const billions = Math.floor(rest / 1e9)
  rest %= 1e9
  const millions = Math.floor(rest / 1e6)
  rest %= 1e6
  const thousands = Math.floor(rest / 1e3)
  const units = rest % 1000
  const parts = []

  if (billions) parts.push(billions + " milliard" + (billions > 1 ? "s" : ""))
  if (millions || billions) parts.push(millions + " million" + (millions > 1 ? "s" : ""))
  if (thousands || millions || billions) parts.push(thousands + " mille")
  parts.push(String(units).padStart(value >= 1000 ? 3 : 1, "0"))

  return parts.join(" · ")
}

function updateSeconds() {
  const seconds = Math.floor((Date.now() - birthTimestamp) / 1000)
  compact.textContent = exactNumber(seconds)
  breakdown.textContent = breakdownNumber(seconds)
  updateHumanBreakdown("liveSecondsHuman", seconds)

  compact.classList.remove("tick")
  void compact.offsetWidth
  compact.classList.add("tick")
}



function humanBreakdownHTML(value) {
  const number = Math.max(0, Math.floor(Number(value) || 0))
  const billions = Math.floor(number / 1000000000)
  const millions = Math.floor((number % 1000000000) / 1000000)
  const thousands = Math.floor((number % 1000000) / 1000)
  const units = number % 1000
  const parts = []

  if (billions > 0) {
    parts.push(
      exactNumber(billions) +
      " milliard" +
      (billions > 1 ? "s" : "")
    )
  }

  if (millions > 0 || billions > 0) {
    parts.push(
      exactNumber(millions) +
      " million" +
      (millions > 1 ? "s" : "")
    )
  }

  if (thousands > 0 || millions > 0 || billions > 0) {
    parts.push(exactNumber(thousands) + " mille")
  }

  parts.push(exactNumber(units))

  return parts
    .map(function(part) {
      return "<span>" + part + "</span>"
    })
    .join("")
}

function updateHumanBreakdown(id, value) {
  const element = document.getElementById(id)

  if (element) {
    element.innerHTML = humanBreakdownHTML(value)
  }
}

function sliderNumber(value, maximumFractionDigits = 1) {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue)) {
    return "0"
  }

  const rounded = numericValue.toFixed(maximumFractionDigits)
  const parts = rounded.split(".")
  const groupedInteger = parts[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "\u202F"
  )

  if (!parts[1]) {
    return groupedInteger
  }

  const trimmedDecimal = parts[1].replace(/0+$/, "")

  return trimmedDecimal
    ? groupedInteger + "," + trimmedDecimal
    : groupedInteger
}


function fitMetricValue(element) {
  if (!element) return

  element.style.fontSize = ""

  const parentWidth = element.parentElement.clientWidth - 20
  let size = parseFloat(getComputedStyle(element).fontSize)

  while (element.scrollWidth > parentWidth && size > 28) {
    size -= 1
    element.style.fontSize = size + "px"
  }
}

function fitAllMetricValues() {
  document.querySelectorAll(".adjustable-value, .exact-seconds")
    .forEach(fitMetricValue)
}

function setMetricValue(id, value, rawValue) {
  const element = document.getElementById(id)

  if (element) {
    element.textContent = value

    if (
      element.classList.contains("adjustable-value") ||
      element.classList.contains("exact-seconds")
    ) {
      requestAnimationFrame(function() {
        fitMetricValue(element)
      })
    }

    if (
      element.classList.contains("adjustable-value") &&
      typeof rawValue === "number"
    ) {
      updateHumanBreakdown(id + "Break", rawValue)
    }
  }
}

function updateEstimatedMetrics() {
  const sleepHours = Number(document.getElementById("sleepSlider")?.value || 8)
  const heartRate = Number(document.getElementById("heartSlider")?.value || 72)
  const breathRate = Number(document.getElementById("breathSlider")?.value || 16)
  const blinkRate = Number(document.getElementById("blinkSlider")?.value || 15)
  const walkPerDay = Number(document.getElementById("walkSlider")?.value || 4.5)
  const toiletMinutes = Number(document.getElementById("toiletSlider")?.value || 30)

  const sleepYears = totalDaysLived * (sleepHours / 24) / 365.2425
  const heartbeats = totalMinutesLived * heartRate
  const breaths = totalMinutesLived * breathRate
  const awakeMinutes = totalDaysLived * (24 - sleepHours) * 60
  const blinks = awakeMinutes * blinkRate
  const walkingKm = totalDaysLived * walkPerDay
  const earthTours = walkingKm / 40075
  const toiletDays = totalDaysLived * toiletMinutes / 1440

  setMetricValue("sleepValue", sliderNumber(sleepYears, 1), sleepYears)
  setMetricValue("heartValue", exactNumber(Math.round(heartbeats)), heartbeats)
  setMetricValue("breathValue", exactNumber(Math.round(breaths)), breaths)
  setMetricValue("blinkValue", exactNumber(Math.round(blinks)), blinks)
  setMetricValue("walkValue", exactNumber(Math.round(walkingKm)), walkingKm)
  setMetricValue("toiletValue", exactNumber(Math.round(toiletDays)), toiletDays)

  setMetricValue("sleepSliderValue", sliderNumber(sleepHours, 2) + " h / nuit")
  setMetricValue("heartSliderValue", exactNumber(heartRate) + " bpm")
  setMetricValue("breathSliderValue", exactNumber(breathRate) + " / min")
  setMetricValue("blinkSliderValue", exactNumber(blinkRate) + " / min éveillée")
  setMetricValue("walkSliderValue", sliderNumber(walkPerDay, 1) + " km / jour")
  setMetricValue("toiletSliderValue", exactNumber(toiletMinutes) + " min / jour")

  setMetricValue(
    "sleepDescription",
    "Avec une moyenne de " + sliderNumber(sleepHours, 2) + " h de sommeil par nuit."
  )
  setMetricValue(
    "heartDescription",
    "Avec une moyenne de " + exactNumber(heartRate) + " battements par minute."
  )
  setMetricValue(
    "breathDescription",
    "Avec une moyenne de " + exactNumber(breathRate) + " respirations par minute."
  )
  setMetricValue(
    "blinkDescription",
    "Avec " + exactNumber(blinkRate) + " clignements par minute éveillée."
  )
  setMetricValue(
    "walkDescription",
    "Environ " + sliderNumber(earthTours, 1) + " tours de la Terre."
  )
  setMetricValue(
    "toiletDescription",
    "Avec une moyenne de " + exactNumber(toiletMinutes) + " minutes par jour."
  )
}

document.querySelectorAll(".metric-slider").forEach(slider => {
  slider.addEventListener("input", updateEstimatedMetrics)
  slider.addEventListener("click", event => event.stopPropagation())
  slider.addEventListener("touchstart", event => event.stopPropagation(), { passive: true })
  slider.addEventListener("touchend", event => event.stopPropagation(), { passive: true })
})

function animateGrid() {
  if (gridAnimated) return
  gridAnimated = true

  const cells = Array.from(document.querySelectorAll(".month"))
  const currentMonth = document.querySelector(".month.current")

  // Force le WebView à calculer la grille avant de lancer le fade-in.
  void document.getElementById("lifeGrid").offsetWidth

  requestAnimationFrame(() => {
    document.querySelectorAll(".month.lived")
      .forEach(cell => cell.classList.add("show"))

    setTimeout(() => {
      currentMonth?.classList.add("pulse")
    },7000)
  })
}

function showScreen(index) {
  if (index < 0 || index >= screens.length) return

  screens.forEach((screen, i) => {
    screen.classList.toggle("active", i === index)
  })

  currentScreen = index
  progressBar.style.width = (index / (screens.length - 1) * 100) + "%"

  if (index === screens.length - 1) {
    setTimeout(animateGrid, 80)
  }
}

function nextScreen() {
  if (locked || currentScreen >= screens.length - 1) return
  locked = true
  showScreen(currentScreen + 1)
  setTimeout(() => locked = false, 420)
}

function previousScreen() {
  if (locked || currentScreen <= 0) return
  locked = true
  showScreen(currentScreen - 1)
  setTimeout(() => locked = false, 420)
}

function openGoogle(event, url) {
  event.preventDefault()
  event.stopPropagation()
  window.location.href = url
}

function toggleCapture(event) {
  event.stopPropagation()
  document.body.classList.toggle("capture")
}

document.addEventListener("click", event => {
  if (event.target.closest("button") || event.target.closest("a") || event.target.closest("input")) return
  if (currentScreen > 0 && currentScreen < screens.length - 1) nextScreen()
})

let startY = null
document.addEventListener("touchstart", event => {
  if (event.target.closest("input")) return
  startY = event.touches[0].clientY
}, { passive: true })

document.addEventListener("touchend", event => {
  if (event.target.closest("input")) return
  if (startY === null) return
  const distance = startY - event.changedTouches[0].clientY
  if (Math.abs(distance) > 45) {
    distance > 0 ? nextScreen() : previousScreen()
  }
  startY = null
}, { passive: true })

updateSeconds()
updateEstimatedMetrics()
requestAnimationFrame(fitAllMetricValues)
setInterval(updateSeconds, 1000)
</script>
</body>
</html>
  `
}


function adjustableCard({
  ambient,
  icon,
  eyebrow,
  value,
  unit,
  valueId,
  descriptionId,
  description,
  sliderId,
  sliderLabel,
  sliderValueId,
  min,
  max,
  step,
  initial,
  suffix
}) {
  return `
  <section class="screen">
    ${ambientHTML(ambient)}
    <div class="card adjustable-card">
      <div class="icon">${icon}</div>
      <p class="eyebrow">${escapeHTML(eyebrow)}</p>
      <div class="stat-value adjustable-value" id="${valueId}">${escapeHTML(value)}</div>
      <div class="stat-unit">${escapeHTML(unit)}</div>
      <div class="human-breakdown" id="${valueId}Break"></div>
      <p class="description" id="${descriptionId}">${escapeHTML(description)}</p>

      <div class="slider-panel">
        <div class="slider-heading">
          <span class="slider-label">${escapeHTML(sliderLabel)}</span>
          <span class="slider-reading" id="${sliderValueId}">
            ${escapeHTML(String(initial) + suffix)}
          </span>
        </div>
        <input
          class="metric-slider"
          id="${sliderId}"
          type="range"
          min="${min}"
          max="${max}"
          step="${step}"
          value="${initial}"
          aria-label="${escapeHTML(sliderLabel)}"
        >
      </div>
    </div>
    ${tapHintHTML()}
  </section>
  `
}

function statCard(icon, eyebrow, value, unit, description, ambient) {
  return `
  <section class="screen">
    ${ambientHTML(ambient)}
    <div class="card">
      <div class="icon">${icon}</div>
      <p class="eyebrow">${escapeHTML(eyebrow)}</p>
      <div class="stat-value">${escapeHTML(value)}</div>
      <div class="stat-unit">${escapeHTML(unit)}</div>
      <p class="description">${escapeHTML(description)}</p>
    </div>
    ${tapHintHTML()}
  </section>
  `
}

function ambientHTML(number) {
  return `<div class="ambient ambient-${number}"></div>`
}

function tapHintHTML() {
  return `<div class="tap-hint">Touchez pour continuer</div>`
}

function formatFrenchDate(date) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date)
}

function formatNumber(value, maximumFractionDigits = 0) {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue)) {
    return "0"
  }

  const rounded = numericValue.toFixed(maximumFractionDigits)
  const [integerPart, decimalPart] = rounded.split(".")

  const groupedInteger = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "\u202F"
  )

  if (
    maximumFractionDigits === 0 ||
    !decimalPart
  ) {
    return groupedInteger
  }

  const trimmedDecimal = decimalPart.replace(/0+$/, "")

  return trimmedDecimal
    ? groupedInteger + "," + trimmedDecimal
    : groupedInteger
}

function formatLargeNumber(value) {
  if (value >= 1e9) return formatNumber(value / 1e9, 2) + " milliard" + (value >= 2e9 ? "s" : "")
  if (value >= 1e6) return formatNumber(value / 1e6, 2) + " millions"
  if (value >= 1e3) return formatNumber(value / 1e3, 2) + " milliers"
  return formatNumber(value)
}

function formatCompact(value) {
  if (Math.abs(value) >= 1e9) return formatNumber(value / 1e9, 2) + " milliards"
  if (Math.abs(value) >= 1e6) return formatNumber(value / 1e6, 1) + " millions"
  if (Math.abs(value) >= 1e3) return formatNumber(value / 1e3, 1) + " milliers"
  return formatNumber(value)
}

function formatNumberBreakdown(value) {
  let rest = Math.floor(value)
  const billions = Math.floor(rest / 1e9)
  rest %= 1e9
  const millions = Math.floor(rest / 1e6)
  rest %= 1e6
  const thousands = Math.floor(rest / 1e3)
  const units = rest % 1000
  const parts = []

  if (billions) parts.push(`${billions} milliard${billions > 1 ? "s" : ""}`)
  if (millions || billions) parts.push(`${millions} million${millions > 1 ? "s" : ""}`)
  if (thousands || millions || billions) parts.push(`${thousands} mille`)
  parts.push(String(units).padStart(value >= 1000 ? 3 : 1, "0"))

  return parts.join(" · ")
}

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
