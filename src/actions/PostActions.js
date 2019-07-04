export function goForward(number = 1) {
	return {
		type: 'GO_FORWARD',
		amount: number
	}

}


export function goForwardExact(number) {
		return {
		type: 'GO_FORWARD_EXACT',
		amount: number
	}
}

export function goBackwards(number = 1) {
	return {
		type: 'GO_BACKWARDS',
		amount: number

	}
}