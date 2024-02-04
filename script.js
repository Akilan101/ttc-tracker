fetchData();

async function fetchData() {
  try {
    const busRoute = document.getElementById("busRoute").value;

    const response = await fetch(
      "https://retro.umoiq.com/service/publicJSONFeed?command=vehicleLocations&a=ttc&t=0"
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const bus = data.vehicle[busRoute];
    // console.log(data);
    console.log(bus);
  } catch (error) {
    console.error(error);
  }
}
