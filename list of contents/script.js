var listButton = document.getElementsByClassName("listButton");
var listApps = document.getElementById("listApps");
var listGames = document.getElementById("listGames");
var readApps = getComputedStyle(listApps);//to read the external css file
var readGames = getComputedStyle(listGames);
listButton[0].addEventListener("click", function()
{
	if (readApps.display == "none")
	{
		listApps.style.display = "block";
		listGames.style.display = "none";
	}
});
listButton[1].addEventListener("click", function()
{
	if (readGames.display == "none")
	{
		listGames.style.display = "block";
		listApps.style.display = "none";
	}
});