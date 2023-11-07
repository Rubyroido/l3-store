export function analyse(
    type: string,
    payload: {}
) {
    const data: {
        type: string,
        payload: {},
        timestamp: number
    } = {
        type: type,
        payload: payload,
        timestamp: Date.now()
    }

    fetch('/api/sendEvent', {
        method: 'POST',
        body: JSON.stringify(data)
    }) 
}