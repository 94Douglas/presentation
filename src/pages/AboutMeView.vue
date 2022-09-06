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