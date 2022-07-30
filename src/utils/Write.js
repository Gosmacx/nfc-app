export default async function write(records, touchedDelay, loading) {
    loading.value = true

    try {
        const ndef = new NDEFReader();
        await ndef.write({
            records: records
        })
            .then(() => {
                touchedDelay.value = true
                setTimeout(() => {
                    touchedDelay.value = false
                    loading.value = false
                }, 700);
            })
    } catch (error) {
        alert(error)
        loading.value = false
    }

}