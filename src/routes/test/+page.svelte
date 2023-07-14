<script>
    import { onMount, onDestroy } from 'svelte';
  
    let data = [];
    let posts = [];
    let queryBody = {
            query: `{
                stopPlace(id: "NSR:StopPlace:5947") {
                id
                name
                estimatedCalls(timeRange: 72100, numberOfDepartures: 5) {
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
                    publicCode
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

        };
    async function fetchData() {
      try {
        const response = await fetch("https://api.entur.io/journey-planner/v3/graphql", {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                "ET-Client-Name" : "mroneid/personal-test-app",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(queryBody),
        }); 
        data = await response.json();
        posts = data.data.stopPlace.estimatedCalls;
        // Calculate the time difference in minutes
        const now = new Date();
        data = posts.map(item => {
            const apiTime = new Date(item.expectedDepartureTime);
            const diffInMinutes = Math.floor((apiTime - now) / (1000 * 60));
            return {
            ...item,
            diffInMinutes
            };
        });
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    }
  
    // Fetch the data when the component is mounted
    onMount(fetchData);
  
    // Set up auto-reloading
    const reloadInterval = setInterval(fetchData, 60000);
  
    // Clean up the interval when the component is destroyed
    onDestroy(() => {
      clearInterval(reloadInterval);
    });
  </script>

<main>
    <ul>        
            {#if data.length > 0}
            <div class="grid grid-rows-6 grid-cols-4 gap-4">
                <div class="font-black">Linje</div>
                <div class="font-black">Retning</div>
                <div class="font-black">Tid til avgang</div>
                <div class="font-black">Plattform</div>
              
                {#each data as post}                
                <div><span class="inline-flex items-center rounded-md bg-ruter-orange px-3 py-0 text-sm font-sans font-medium text-white ring-1 ring-inset ring-red-600/10">
                    {post.serviceJourney.journeyPattern.line.publicCode}
                </span></div>
                <div class="">{post.destinationDisplay.frontText}</div>
                <div class="">{post.diffInMinutes} min</div>
                <div class="">{post.quay.publicCode}</div>
                 

                    {/each}
                    </div>
            {:else}
              <p>Loading...</p>
            {/if}
 
          
    </ul>

  </main>
  
  <style>
    
    ul {
      list-style-type: none;
      padding: 0;
    }
  
    li {
      margin-bottom: 0.5rem;
    }
  </style>