// @flow

import React from 'react';
import Rating from 'react-rating';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import type { Item } from 'types';

const useStyles = makeStyles({
    root: {
        marginBottom: 10
    },
    media: {
        height: 140,
    },
    content: {
        textAlign: 'left'
    },
    button: {
        padding: 2,
        color: '#FFC107'
    }
});

export const MAX_RATE = 10;

type Props = Item & { onRateChange: (id: number, value: number) => void }

const ListItem = ({ title, id, image, description, rate, onRateChange }: Props) => {
    const { root, media, content, button } = useStyles();

    const emptyStar = <IconButton className={ button }><StarBorderIcon /></IconButton>
    const fullStart = <IconButton className={ button }><StarIcon /></IconButton>

    return (
        <Card className={ root }>
            <CardMedia
                className={ media }
                component="img"
                image={ image }
                title={ title }
            />
            <CardContent className={ content }>
                <Typography gutterBottom variant="h5" component="h2">
                    { title }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { description }
                </Typography>
            </CardContent>
            <CardActions>
                <Rating
                    initialRating={ rate }
                    stop={ MAX_RATE }
                    emptySymbol={ emptyStar }
                    fullSymbol={ fullStart }
                    onChange={ value => onRateChange(id, value) }
                />
            </CardActions>
        </Card>
    );
}

export default React.memo<Props>(ListItem);
