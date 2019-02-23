d3.select("#graph2").graphviz()
    .fade(false)
    .addImage("https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon", "400px", "300px")
    .addImage("https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon", "400px", "300px")
    .renderDot('digraph { a[image="https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon"]; b[image="https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon"]; a -> b }');