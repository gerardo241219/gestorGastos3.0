const cashFormat = amount => {
    return amount.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export default cashFormat;