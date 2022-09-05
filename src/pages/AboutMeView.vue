<template>
    <div>
        <base-card>
            <section>
                <h2>Vem är jag?</h2>
            </section>
            <h3>
                Mitt namn är Douglas Schoug, jag är 28 år gammal.

                Kommer från Skåne till en början, bor nu i Stenungsund med min sambo.
            </h3>
            <br />
            <h3>
                Jag har ett intresse för aktier, som jag håller på med en del, för övrigt på min fritid så umgås jag med
                familj och vänner.
                Annars sitter jag och programmerar så mycket jag kan, just för att jag tycker det är extremt roligt och
                något jag brinner för.
                Dock gör jag det även för att
                utöka min kompetens, främst inom frontend.
            </h3>
        </base-card>
        <base-card>
            <br />
            <h3>
                I Augusti 2020 bestämde jag mig för att skola om mig och påbörja en ny karriär. Jag började studera till
                .NET utvecklare, en två årig utbildning på Campus Mölndal.

            </h3>
        </base-card>

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