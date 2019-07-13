<template>
<div id="app">
    <b-container fluid>
    <b-row class="pt-2">
        <b-col cols="4" class="ml-2">
            <b-card class="card-poem p-5" img-src="/Hasil.png" img-alt="Hasil Paudyal" img-top>
                <b-card-text class="card-text-poem">
                    <strong>H</strong>ere I am<br><strong>A</strong> cut above you all<br><strong>S</strong>ilent as a grave<br><strong>I</strong>n favour of your death<br><br><strong>L</strong>ethal is my pen<br><strong>P</strong>erfect would be again<br><strong>A</strong> fortune is with me<br><strong>U</strong>nbeatable this shall be<br><br><strong>D</strong>are you come near<br><strong>Y</strong>ell you out there<br><strong>A</strong>nd who is this me<br><strong>L</strong>inks the first letters to me </b-card-text>
            </b-card>
        </b-col>
        <b-col>
              <b-img class="pb-3" src="/cover.jpg" rounded fluid alt="Hasil Cover"></b-img>
                <b-nav align="right" small>
                    <b-nav-item><b-link to="/">Projects</b-link></b-nav-item>
                    <b-nav-item><b-link to="/">Quotes</b-link></b-nav-item>
                    <b-nav-item><b-link to="/">Hire Me</b-link></b-nav-item>
                    <b-nav-item><b-link to="/">Get in Touch</b-link></b-nav-item>
                </b-nav>
            <router-view />
        </b-col>
    </b-row>
    </b-container>
</div>
</template>

<style>
body {
    font-family: arial;
}
.nav {
    background-color: #AC252D;
    color: #FFFFFF;
    height: 35px;
}
.nav-item a{
    color: #ffffff;
}
.card-poem{
    background-color: #FBF1FF;
    border: none;
    border-radius: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.card-text-poem {
    text-align: center;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 20px;
    margin: 20px auto;
    color: #6E161C;
}
</style>