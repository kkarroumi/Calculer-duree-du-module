function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ULQmUo9GMI":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Récupérer l'élément TextEntry par son nom de variable
var textEntry = player.GetVar("Temps_total");

// Désactiver la possibilité d'édition
textEntry.readOnly = true;

}

};
