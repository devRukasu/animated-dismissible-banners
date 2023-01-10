function showError() {
    if(document.querySelector(".banner-error").style.display = "none"){
        document.querySelector(".banner-error").style.display = "flex";
        document.querySelector(".banner-success").style.display = "none";
        document.querySelector(".banner-info").style.display = "none";
    }
}

function fecharBannerError() {
    if(document.querySelector(".banner-error").style.display = "flex"){
        document.querySelector(".banner-error").style.display = "none";
    }
}

function showSucess() {
    if(document.querySelector(".banner-success").style.display = "none"){
        document.querySelector(".banner-success").style.display = "flex";
        document.querySelector(".banner-error").style.display = "none";
        document.querySelector(".banner-info").style.display = "none";
    }
}

function fecharBannerSucess() {
    if(document.querySelector(".banner-success").style.display = "flex"){
        document.querySelector(".banner-success").style.display = "none";
    }
}

function showInfo() {
    if(document.querySelector(".banner-info").style.display = "none"){
        document.querySelector(".banner-info").style.display = "flex";
        document.querySelector(".banner-error").style.display = "none";
        document.querySelector(".banner-success").style.display = "none";
    }
}

function fecharBannerInfo() {
    if(document.querySelector(".banner-info").style.display = "flex"){
        document.querySelector(".banner-info").style.display = "none";
    }
}

