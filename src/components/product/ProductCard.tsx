import NextLink from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { IProduct } from "../../interfaces";

interface IProps {
  product: IProduct;
}

export function ProductCart({ product }: IProps) {
  const [isHovered, setIsHovered] = useState(false);

  // se o produto estiver com mouse sobre o card ele é true
  const productImg = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href="/products/slug" passHref prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia
                component="img"
                className="fadeIn"
                image={productImg} // se for true exiba o card
                alt={product.title}
              ></CardMedia>
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>R${product.price}</Typography>
      </Box>
    </Grid>
  );
}
