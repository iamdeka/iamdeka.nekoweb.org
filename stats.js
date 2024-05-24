//max.nekoweb.org/resources/license.txt
const getStats = async () => {
    const request = await fetch(`https://nekoweb.org/api/site/info/iamdeka`);
    const json = await request.json();
    const updated = new Date(json.updated_at).toLocaleDateString();
    const created = new Date(json.created_at).toLocaleDateString();
    document.getElementById("updates").innerHTML = `<strong>Updates</strong>: ${json.updates + 99}`;
    document.getElementById("updated").innerHTML = `<strong>Updated on</strong>: ${updated}`;
    document.getElementById("visitors").innerHTML = `<strong>Visits</strong>: ${json.views}`;
};
getStats();