d3.select("#graph2").graphviz()
    .fade(false)
    .addImage("https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon", "400px", "300px")
    .addImage("https://scrapbox.io/api/pages/T-kazu-Note/ごろごろ～/icon", "400px", "300px")
    .renderDot('digraph { 
    	subgraph cluster_0 {
    	a -> b;
    	label=“cluster 0”;
  							}
  		subgraph cluster_1 {
    	x -> y -> z;
    	label=“cluster 1”;
  							}
 		 a -> x;
 		 }');