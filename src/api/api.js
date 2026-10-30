// const API_BASE_URL = "https://api.atr.uz";

// export async function getNews() {
//     const response = await fetch(`${API_BASE_URL}/api/profile`);

//     if (!response.ok) {
//         throw new Error(`API xatosi: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log("API ma'lumoti:", data);

//     return data;
// }

const API_BASE_URL = "https://api.atr.uz";

export async function getNews() {
    const response = await fetch(`${API_BASE_URL}/api/profile`);

    const responseText = await response.text();

    console.log("Status:", response.status);
    console.log("Server javobi:", responseText);

    if (!response.ok) {
        throw new Error(`API xatosi: ${response.status} - ${responseText}`);
    }

    return JSON.parse(responseText);
}
