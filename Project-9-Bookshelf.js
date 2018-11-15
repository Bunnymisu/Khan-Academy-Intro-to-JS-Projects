//object array to declair each book information
var bookinfo = [
    {title: "Clifford",
    Author: "Norman Bridwell",
    year: "1963"},
    
    {title: "Garfield",
    Author: "Jim Davis",
    year: "1978"}, 
    
    {title: "The Maze Runner",
    Author: "James Dashner",
    year: "2009"},    
];

//draws the background
background(107, 81, 81);

// draw shelf
for (var w = 0; w <= 2; w++)
{
fill(117, 69, 69);
rect(12, w * 154 + 78, 378, 10);
}

    //second loop spaces book's x position
    for(var f = 0; f <= 2; f++)
    {
    //draws a single book    
    fill(186, 255, 244);
    rect(f * 134 + 18, 111 * 1 +21, 92, 100);
    fill(0, 0, 0);
    }

//loops 3 times, printing out the title, author and year each time 

for (var e = 0; e<= 2; e++)
{
    text(bookinfo[e].title, e * 135 + 22, 1 * 117 + 25, 79, 117);
    text(bookinfo[e].Author, e * 134 + 21, 1 * 123 + 51, 70, 100);
    text(bookinfo[e].year, e * 136 + 21, 1 * 168 + 51, 70, 100);
}
