async function appInit() {
    const res = await fetch('https://661c292fe7b95ad7fa69d7d1.mockapi.io/api/v1/albums')
    const payload = await res.json()
    console.log(payload)
}

appInit()