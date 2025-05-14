import db from '$lib/db.js';

export const actions = {
    create: async ({request}) => {

        const data = await request.formData()

        let artist = {
            name: data.get("name"),
            origin: data.get("origin")
        }

        db.createArtist(artist)

        return {success: true}
    }
}