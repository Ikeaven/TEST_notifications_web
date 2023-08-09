function askNotificationPermission() {
    console.log("askNotificationPermission");
    // La fonction qui sert effectivement à demander la permission
    function handlePermission(permission) {
        // On affiche ou non le bouton en fonction de la réponse
        if (
            Notification.permission === "denied" ||
            Notification.permission === "default"
            ) {
                notificationBtn.style.display = "block";
            } else {
                console.log(Notification.permission)
                notificationBtn.style.display = "none";
            }
        }
        
        // Vérifions si le navigateur prend en charge les notifications
        if (!("Notification" in window)) {
            console.log("Ce navigateur ne prend pas en charge les notifications.");
        } else {
            if (checkNotificationPromise()) {
                Notification.requestPermission().then((permission) => {
                    handlePermission(permission);
                });
            } else {
                Notification.requestPermission(function (permission) {
                    handlePermission(permission);
                });
            }
        }
}
    
function checkNotificationPromise() {
    try {
      Notification.requestPermission().then();
    } catch (e) {
      return false;
    }
  
    return true;
  }
  

var notificationBtn = document.querySelector("#enable_notification");
notificationBtn.addEventListener("click", askNotificationPermission);

var create_notification = document.querySelector("#create_notification");
create_notification.addEventListener("click", function () {
    var notification = new Notification("Notification", {
        body: "sqdFKJHS S SQD FSQMLFKJS FSQDF LQKSDJF  QSDFMLKJ QSDF SQDF QSFDMLKQSJ FQSDFLMKJF QSF LKJQSMDFLKQSJDFMLQSKDFJ QSDMFQSMDFLQSKFJ  QSDFMQLSKFJ ",
        icon: "./static/img/tv-solid.svg",
        silent: false,
        data: "This element is the data passed to the notification",
    });
    notification.onclick = function(event) { 
        event.preventDefault();
        window.open('https://www.google.com', '_blank');
     };
    
    notification.onshow = function () {
        var audio = new Audio("./notification.wav");
        audio.play();
    };
});
