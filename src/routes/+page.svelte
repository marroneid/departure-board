<script>
  import { onMount } from "svelte";
  const endpoint = "https://jsonplaceholder.typicode.com/posts";
  let posts = [];
  let stopPlace = [];
  onMount(async function () {
    const res = await fetch("https://api.entur.io/journey-planner/v3/graphql", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
        "Content-Type": "application/json",
        "ET-Client-Name" : "mroneid/personal-test-app",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            query: `{
                stopPlace(id: "NSR:StopPlace:5947") {
                id
                name
                estimatedCalls(timeRange: 72100, numberOfDepartures: 10) {
                    realtime
                    aimedArrivalTime
                    aimedDepartureTime
                    expectedArrivalTime
                    expectedDepartureTime
                    actualArrivalTime
                    actualDepartureTime
                    date
                    forBoarding
                    forAlighting
                    destinationDisplay {
                    frontText
                    }
                    quay {
                    id
                    name

                    }
                    serviceJourney {
                    journeyPattern {
                        line {
                            id
                            name
                            transportMode
                            publicCode
                            presentation {
                                colour
                                textColour
                            }
                        }
                    }
                    }
                }
                }
            }
            `,

        }),
        });    
    const data = await res.json();
    stopPlace = data.data.stopPlace;
    posts = data.data.stopPlace.estimatedCalls;
    console.log(posts);
  });

  export let name;
  
</script>



<h1>{stopPlace.name}</h1>

{#each posts as post}
<div>
  <p>[{post.serviceJourney.journeyPattern.line.publicCode}] {post.destinationDisplay.frontText} - {post.expectedDepartureTime}</p>
</div>
{/each}
<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

<style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }

</style>
