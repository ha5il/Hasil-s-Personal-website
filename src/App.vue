<template>
<div id="app">
    <div id="nav">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link tag="b-navbar-brand" :to="{name:'home'}">Hasil Paudyal</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <router-link tag="b-nav-item" :to="{name:'about'}">About</router-link>
                    <router-link tag="b-nav-item" :to="{name:'project',slug:'all'}">Projects</router-link>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
    <router-view />
</div>
</template>

<style>
#nav .navbar-brand {
    cursor: pointer;
}
</style>
