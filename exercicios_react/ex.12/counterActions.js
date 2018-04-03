export function inc() {
    return {
        type: 'INC'
    }
}

export function dec() {
    return {
        type: 'DEC'
    }
}

export function changeStep(e) {
    return {
        type: 'CHANGE_STEP',
        payload: e.target.value
    }
}