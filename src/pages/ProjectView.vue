<template>
    <div>
        <base-card>
            <section>
                <h2>Vad har jag gjort?</h2>
            </section>

            <h2>Har gjort två projekt åt två kunder.
                Första projektet var en hemsida till en bostadsrättsförening.
                Då vi hade examensarbete det absolut sista i utbildningen, såg jag min chans att påbörja detta projekt.
                Då examensarbetet gick ut på att lära sig en helt ny teknik, valde jag mig för att lära mig Vue.js.
                Det lät som ett väldigt intressant verktyg och populariteten kring Vue växte, men att kunna mer än ett
                verktyg
                var verkligen av intresse.
            </h2>
            <br />
            <h2>
                Det var en lärorik väg att gå, termonologin var ej så olik andra språk, så som React. Eftersom vi hade
                haft
                en kurs inom React, blev det lite lättare att sätta sig in i verktyget Vue.
                Vill även lägga en notering att denna hemsidan är gjord i Vue programmeringsspråk.
            </h2>
            <br />
            <h2>
                Länken till första projektet finner ni genom att klicka
                <a v-on:click="openInNewTab()" href="">HÄR</a>
            </h2>

        </base-card>

    </div>
</template>

<script>
export default {
    data() {
        return {
            brfHallungen: "https://brfhallungen.se/",
        }
    },
    methods: {
        openInNewTab() {
            window.open(this.brfHallungen, "_blank", "noopener,noreferrer");
        },
    }
}
</script>

<style>
</style>