<template>
    <div>
        <br />
        <br />

        <section>
            <h1>Vad har jag gjort?</h1>
        </section>
        <base-card>
            <section>
                <h2>Projekt 1 - BRF Hästhagsvägen</h2>
            </section>
            <br />

            <h3>Har gjort två projekt åt två kunder.
                Första projektet är en hemsida till en bostadsrättsförening.
                Examensarbetet var det sista momentet att utföra i utbildningen, här såg jag min chans att påbörja detta
                projekt.
                Då examensarbetet gick ut på att lära sig en helt ny teknik, valde jag mig för att lära mig Vue.js.
                Det lät som ett väldigt intressant verktyg och populariteten kring Vue växte, men att kunna mer än ett
                verktyg
                var verkligen av intresse.
            </h3>
            <br />
            <h3>
                Det var en lärorik väg att gå, termonologin var ej så olik andra språk, så som React. Eftersom vi hade
                haft
                en kurs inom React, blev det lite lättare att sätta sig in i verktyget Vue.
                Har återanvänt komponenter på hela projektet och kommenterad kod. Detta resulterade i att man sparade
                extremt mycket tid
                samt
                sparade in hur stort hela projektet skulle bli.
            </h3>
            <br />
            <h3>
                Syftet med Bostadsrättsföreningens hemsida är att man ska kunna läsa lite information om området och
                bostadsrättsföreningen.
                Kunna läsa årsredovisning. På hemsidan skulle man kunna registrera en användare, login system och kunna
                göra ett inlägg på hemsidan under fliken
                årsredovisning.
            </h3>
            <br />
            <h3>
                I framtiden har de planer på att det ska finnas funktionalitet, så de kan se en översikt på
                parkeringsplatser.
                Vilken plats är upptagen och vilken är ledig, då det finns begränsade antal parkeringsplatser.

            </h3>
            <br />
            <h3>
                Länken till första projektet finner ni genom att klicka
                <a v-on:click="openBrfInNewTab()" href="">HÄR</a>
            </h3>

        </base-card>

        <base-card>
            <section>
                <h2>Projekt 2 - Olovs Hage Samfällighet</h2>
            </section>
            <br />
            <h3>
                Det andra projektet jag utförde till en kund var en hemsida till en samfällighet.
                Då jag är väldigt intresserad av nya tekniker, såg jag chansen att lära mig något nytt.
                Den nya tekniken som jag valde var att lära mig var MERN fullstack lösning.
                Kunden önskade att man skulle kunna skapa konton, ett login system, kunna lägga till eller ta bort
                information
                på "Kontakt" fliken.
                Ett system för felanmälningar samt kunna ladda upp PDF fil för årsredovisningen var även ett önskemål,
                som även utfördes.
            </h3>
            <br />
            <h3>
                För att inte alla användare skulle ha tillgång till administratörernas funktionaliteter,
                finns det möjlighet för att en ny användare ska vara en admin eller vanlig användare.
                Admin får då också tillgång till en admin panel, som göms för vanliga användare. Skulle
                en vanlig användare veta länken till admin panelen, så kommer de att nekas då de inte har behörighet
                till denna delen.
            </h3>
            <br />
            <h3>Länken till andra projektet finner ni genom att klicka
                <a v-on:click="openSamfallighetInNewTab()" href="">HÄR</a>
            </h3>

        </base-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            brfHallungen: "https://brfhallungen.se/",
            samfallighet: "http://olovshagesamfallighet.se/",
        }
    },
    methods: {
        openBrfInNewTab() {
            window.open(this.brfHallungen, "_blank", "noopener,noreferrer");
        },
        openSamfallighetInNewTab() {
            window.open(this.samfallighet, "_blank", "noopener,noreferrer");
        },
    }
}
</script>

<style>
h2,
h1 {
    font-family: "Montserrat";
}

h3 {
    font-family: "Montserrat-Medium";
}
</style>