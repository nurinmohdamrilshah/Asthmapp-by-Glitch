function ErrorHandle(msg = '', status = 'alert') {
    if(msg && status !== '') {
        const alert_panel = document.getElementById("errorSection") || '';
        if(alert_panel) {
            alert_panel.classList.remove("hide");
            const alert_msg = document.getElementById("errorMsg") || '';
            if(alert_msg) {
                alert_msg.textContent = `Error: ${msg}`;

                if(status === 'alert') {

                } else if (status === 'success') {

                }
                return true;
            } else {
                console.log("Unable to display error message to user.");
                return false;
            }
        }
    }

    return "Error handler missing argument:'msg'.";
}
export default ErrorHandle;