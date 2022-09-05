<template>
    <header>
        <nav>
            <!-- router-link är dom som ser till så man kommer till rätt vy.
             Exempelvis - Trycker man på Om oss så aktiveras router-link och skickar
             oss till /about-us. -->
            <h1>
                <!-- <router-link to="/">{{ title }}</router-link> -->
            </h1>
            <ul>
                <!-- <li class="borderStyle"></li> -->
                <li>
                    <router-link to="/">{{ homeDisplay }}</router-link>
                </li>

                <li>
                    <router-link to="/about-me">{{ aboutMeDisplay }}</router-link>
                </li>

            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            // Property som visar dess info på hemsidan.
            homeDisplay: "Hem",
            aboutMeDisplay: "Om Mig",
        };
    },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .2s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

/* ----------------------------------------------- */
header {
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid rgba(204, 204, 204, 0.295);
    border-bottom-left-radius: 50%;
    background-color: #8f8f8f23;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 20px rgba(172, 172, 172, 0.199);
}

/* modifiera header ram och text */
header h1 {
    text-decoration: none;
    color: rgb(0, 0, 0);
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0);
    transition: 0.5s;
    cursor: pointer;
}

header h1:hover {
    border: 1px solid rgb(255, 255, 255);
    border-top-left-radius: 15px;
    border-bottom-right-radius: 15px;
    transition: 0.5s;

}

/* Används nu på menyn ------------------------------------------------------- */
ul li a::after {
    content: "";
    width: 0%;
    height: 2px;
    background: #f44336;
    display: block;
    margin: auto;
    transition: 0.5s;
}

ul li a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 30px;
}

ul li a {
    list-style: none;
    display: inline-block;
    padding: 8px 12px;
    position: relative;
}

ul li a:hover::after {
    width: 100%;
}

/*---------------------------------------------------------------*/

h1 a {
    color: rgb(0, 0, 0);
    margin: 0;
    cursor: pointer;
}

h1 a:hover {
    color: inherit;
    text-decoration: none;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
    border-color: transparent;
}

header nav {
    width: 90%;
    height: 6rem;

    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}
</style>