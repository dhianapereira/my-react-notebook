import { styled } from "..";

export const ProductContainer = styled('main', {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'stretch',
    gap: '4rem',

    maxWidth: 1180,
    margin: '0 auto',
})

export const LoadingContainer = styled('div', {
    width: 576,
    height: 'calc(656px - 0.5rem)',
    background: '$gray800',
    borderRadius: 8,
    padding: '0.25rem',
})

export const LoadingDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    '.title': {
        width: '100%',
        borderRadius: 8,
        padding: '1.125rem',
        background: '$gray800',
    },

    '.price': {
        display: 'block',
        marginTop: '1rem',
        padding: '1.125rem',
        maxWidth: 174,
        borderRadius: 8,
        background: '$gray800',
    },

    '.description': {
        marginTop: '2.5rem',
        padding: '2.7rem',
        background: '$gray800',
        width: '100%',
        borderRadius: 8,
    },

    '.button': {
        marginTop: 'auto',
        background: '$gray800',
        padding: '1.25rem',
        width: '100%',
        borderRadius: 8,
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 576,
    height: 'calc(656px - 0.5rem)',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    h1: {
        fontSize: '$2xl',
        color: '$gray300',
    },

    span: {
        display: 'block',
        marginTop: '1rem',
        fontSize: '$2xl',
        color: '$green300',
    },

    p: {
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
    },

    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        color: '$white',
        fontSize: '$md',
        border: 0,
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',

        '&:hover': {
            backgroundColor: '$green300',
        }
    }
})