import "./ui/main.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container row" style={{ overflow: "hidden" }}>
          <svg
            className="squiggly"
            viewBox="-300 0 1200 69"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g className="teal" style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M-332.5 0H-448H-563V45C-539.5 45 -527.9 68.9 -505.5 68.5C-483.1 68.1 -478.5 45 -448 45C-424.5 45 -412.4 68.9 -390 68.5C-367.6 68.1 -363 45 -332.5 45C-309 45 -297.4 68.9 -275 68.5C-252.6 68.1 -248 45 -217.5 45C-194 45 -181.9 68.9 -159.5 68.5C-137.1 68.1 -132.5 45 -102 45C-78.5 45 -66.9 68.9 -44.5 68.5C-22.1 68.1 -17.5 45 13 45C36.5 45 48.6 68.9 71 68.5C93.4 68.1 98 45 128.5 45C152 45 163.6 68.9 186 68.5C208.4 68.1 213 45 243.5 45C267 45 279.1 68.9 301.5 68.5C323.9 68.1 328.5 45 359 45C382.5 45 394.1 68.9 416.5 68.5C438.9 68.1 443.5 45 474 45C497.5 45 509.6 68.9 532 68.5C554.4 68.1 559 45 589.5 45C613 45 624.6 68.9 647 68.5C669.4 68.1 674 45 704.5 45C728 45 740.1 68.9 762.5 68.5C784.9 68.1 789.5 45 820 45C843.5 45 855.1 68.9 877.5 68.5C899.9 68.1 904.5 45 935 45C958.5 45 970.6 68.9 993 68.5C1015.4 68.1 1020 45 1050.5 45C1074 45 1085.6 68.9 1108 68.5C1130.4 68.1 1135 45 1165.5 45C1189 45 1201.1 68.9 1223.5 68.5C1245.9 68.1 1250.5 45 1281 45V0H1165.5H1050.5H935H820H704.5H589.5H474H359H243.5H128.5H13H-102H-217.5H-332.5Z"
                  fill="#6EE8DB"
                />
              </g>
              <g className="pink" style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M-356.5 0H-472H-587V45C-563.5 45 -551.9 68.9 -529.5 68.5C-507.1 68.1 -502.5 45 -472 45C-448.5 45 -436.4 68.9 -414 68.5C-391.6 68.1 -387 45 -356.5 45C-333 45 -321.4 68.9 -299 68.5C-276.6 68.1 -272 45 -241.5 45C-218 45 -205.9 68.9 -183.5 68.5C-161.1 68.1 -156.5 45 -126 45C-102.5 45 -90.9 68.9 -68.5 68.5C-46.1 68.1 -41.5 45 -11 45C12.5 45 24.6 68.9 47 68.5C69.4 68.1 74 45 104.5 45C128 45 139.6 68.9 162 68.5C184.4 68.1 189 45 219.5 45C243 45 255.1 68.9 277.5 68.5C299.9 68.1 304.5 45 335 45C358.5 45 370.1 68.9 392.5 68.5C414.9 68.1 419.5 45 450 45C473.5 45 485.6 68.9 508 68.5C530.4 68.1 535 45 565.5 45C589 45 600.6 68.9 623 68.5C645.4 68.1 650 45 680.5 45C704 45 716.1 68.9 738.5 68.5C760.9 68.1 765.5 45 796 45C819.5 45 831.1 68.9 853.5 68.5C875.9 68.1 880.5 45 911 45C934.5 45 946.6 68.9 969 68.5C991.4 68.1 996 45 1026.5 45C1050 45 1061.6 68.9 1084 68.5C1106.4 68.1 1111 45 1141.5 45C1165 45 1177.1 68.9 1199.5 68.5C1221.9 68.1 1226.5 45 1257 45V0H1141.5H1026.5H911H796H680.5H565.5H450H335H219.5H104.5H-11H-126H-241.5H-356.5Z"
                  fill="#E6B1E9"
                />
              </g>
            </g>
          </svg>
        </div>
        <main className="page container column">{children}</main>
        <div className="container row" style={{ overflow: "hidden" }}>
          <svg
            style={{ transform: "rotateZ(180deg)" }}
            className="squiggly"
            viewBox="-300 0 1200 69"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g className="teal" style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M-332.5 0H-448H-563V45C-539.5 45 -527.9 68.9 -505.5 68.5C-483.1 68.1 -478.5 45 -448 45C-424.5 45 -412.4 68.9 -390 68.5C-367.6 68.1 -363 45 -332.5 45C-309 45 -297.4 68.9 -275 68.5C-252.6 68.1 -248 45 -217.5 45C-194 45 -181.9 68.9 -159.5 68.5C-137.1 68.1 -132.5 45 -102 45C-78.5 45 -66.9 68.9 -44.5 68.5C-22.1 68.1 -17.5 45 13 45C36.5 45 48.6 68.9 71 68.5C93.4 68.1 98 45 128.5 45C152 45 163.6 68.9 186 68.5C208.4 68.1 213 45 243.5 45C267 45 279.1 68.9 301.5 68.5C323.9 68.1 328.5 45 359 45C382.5 45 394.1 68.9 416.5 68.5C438.9 68.1 443.5 45 474 45C497.5 45 509.6 68.9 532 68.5C554.4 68.1 559 45 589.5 45C613 45 624.6 68.9 647 68.5C669.4 68.1 674 45 704.5 45C728 45 740.1 68.9 762.5 68.5C784.9 68.1 789.5 45 820 45C843.5 45 855.1 68.9 877.5 68.5C899.9 68.1 904.5 45 935 45C958.5 45 970.6 68.9 993 68.5C1015.4 68.1 1020 45 1050.5 45C1074 45 1085.6 68.9 1108 68.5C1130.4 68.1 1135 45 1165.5 45C1189 45 1201.1 68.9 1223.5 68.5C1245.9 68.1 1250.5 45 1281 45V0H1165.5H1050.5H935H820H704.5H589.5H474H359H243.5H128.5H13H-102H-217.5H-332.5Z"
                  fill="#6EE8DB"
                />
              </g>
              <g className="pink" style={{ mixBlendMode: "multiply" }}>
                <path
                  d="M-356.5 0H-472H-587V45C-563.5 45 -551.9 68.9 -529.5 68.5C-507.1 68.1 -502.5 45 -472 45C-448.5 45 -436.4 68.9 -414 68.5C-391.6 68.1 -387 45 -356.5 45C-333 45 -321.4 68.9 -299 68.5C-276.6 68.1 -272 45 -241.5 45C-218 45 -205.9 68.9 -183.5 68.5C-161.1 68.1 -156.5 45 -126 45C-102.5 45 -90.9 68.9 -68.5 68.5C-46.1 68.1 -41.5 45 -11 45C12.5 45 24.6 68.9 47 68.5C69.4 68.1 74 45 104.5 45C128 45 139.6 68.9 162 68.5C184.4 68.1 189 45 219.5 45C243 45 255.1 68.9 277.5 68.5C299.9 68.1 304.5 45 335 45C358.5 45 370.1 68.9 392.5 68.5C414.9 68.1 419.5 45 450 45C473.5 45 485.6 68.9 508 68.5C530.4 68.1 535 45 565.5 45C589 45 600.6 68.9 623 68.5C645.4 68.1 650 45 680.5 45C704 45 716.1 68.9 738.5 68.5C760.9 68.1 765.5 45 796 45C819.5 45 831.1 68.9 853.5 68.5C875.9 68.1 880.5 45 911 45C934.5 45 946.6 68.9 969 68.5C991.4 68.1 996 45 1026.5 45C1050 45 1061.6 68.9 1084 68.5C1106.4 68.1 1111 45 1141.5 45C1165 45 1177.1 68.9 1199.5 68.5C1221.9 68.1 1226.5 45 1257 45V0H1141.5H1026.5H911H796H680.5H565.5H450H335H219.5H104.5H-11H-126H-241.5H-356.5Z"
                  fill="#E6B1E9"
                />
              </g>
            </g>
          </svg>
        </div>
      </body>
    </html>
  );
}
