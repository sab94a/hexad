// @flow

import React from 'react';
import Rating from 'material-ui-rating'
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
    }
});

export const MAX_RATE = 10;

type Props = Item & { onRateChange: (id: number, value: number) => void }

const ListItem = ({ title, id, image, description, rate, onRateChange }: Props) => {
    const { root, media, content } = useStyles();

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
                    value={ rate }
                    max={ MAX_RATE }
                    iconNormal={ <StarBorderIcon /> }
                    iconFilled={ <StarIcon /> }
                    iconHovered={ <StarIcon /> }
                    onChange={ value => onRateChange(id, value) }
                />
            </CardActions>
        </Card>
    );
}

export default React.memo<Props>(ListItem);
