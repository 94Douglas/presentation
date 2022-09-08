<template>
    <div>
        <br />
        <br />
        <section>
            <h2>Vem är jag?</h2>
        </section>
        <br />
        <img src="../images/me.jpg" alt="Me">
        <base-card>
            <h3>
                Mitt namn är Douglas Schoug, jag är 28 år gammal.

                Kommer från Skåne till en början, bor nu i Stenungsund med min sambo.
            </h3>
            <br />
            <h3>
                Jag har ett intresse för aktier, som jag håller på med en del, för övrigt på min fritid umgås jag med
                familj och vänner.
                Annars sitter jag och programmerar så mycket jag kan, just för att jag tycker det är extremt roligt och
                något jag brinner för.
                Även gör jag det för att
                utöka min kompetens, främst inom frontend.
            </h3>
            <br />
            <h3>
                I Augusti 2020 bestämde jag mig för att skola om mig och påbörja en ny karriär. Jag började studera till
                .NET utvecklare, en två årig utbildning på Campus Mölndal.
            </h3>
            <br />
            <h3>
                Jag ser mig själv som en teamspelare då grupparbete både är något jag har lång erfarenhet av men också
                ser som helt nödvändigt för att lösa de olika problem som kan uppstå i systemutveckling, laget före
                jaget. Man blir aldrig
                fullärd och tänker ofta att andra vet mer än jag men jag hjälper också gärna mina kollegor och kommer
                med idéer.

            </h3>
            <br />
            <h3>
                För mig är det viktigt att återanvända kod och inte slösa bort tid till att skapa funktioner som redan
                finns.
                Att skriva snygg kod är något jag strävar efter hela tiden, den ska vara lättläst för andra
                men även för mig själv. En strävan som också finns är välkommenterad kod och responsiv design för
                mobiltelefoner.
            </h3>
            <br />
            <h3>
                När jag utvecklar en hemsida, så utgår jag såklart efter kundens önskemål samt behov.
                Sedan börjar jag att planera och strukturera upp projektet.
                Börjar nästan alltid med funktionaliteten och mina tester och sedan börjar jag att applicera min design
                på hemsidan
                och utgår ifrån hur jag som användare hade tyckt om på sidan, design och funktion mässigt.
                När jag känner mig nöjd, börjar min dialog med kunden. De får ge input på vad de tycker ser bra ut och
                vad de vill ändra på. Kunden står alltid i framkant, deras produkt och de ska känna sig nöjda!
            </h3>
            <br />
            <h3>
                Jag är en strukturerad person som även är ansvarstagande för min
                del av projektet, mig kan man lita på när det gäller att leverera mot deadline.
            </h3>
        </base-card>
        <base-card>
            <br />
            <h3>

            </h3>
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
h2 {
    font-family: "Montserrat";
}

h3 {
    font-family: "Montserrat-Medium";
}
</style>