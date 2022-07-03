import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { initialData } from "../../database/products";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideShow } from "../../components/products/ProductSlideshow";
import { ItemCounter } from "../../components/ui";

const product = initialData.products[0];

export default function ProductPage() {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          {/* slideshow */}
          <ProductSlideShow images={product.images} />
        </Grid>

        <Grid>
          <Grid item xs={12} sm={5}>
            <Box display="flex" flexDirection="column">
              {/* title */}
              <Typography variant="h1" component="h1">
                {product.title}
              </Typography>
              <Typography variant="subtitle1" component="h2">
                R${product.price}
              </Typography>

              {/* quantity */}
              <Box sx={{ my: 2 }}>
                <Typography variant="subtitle2">Quantity</Typography>
                {/* item count */}
                <ItemCounter />
              </Box>

              {/* put in the cart */}
              <Button color="secondary" className="curclar-btn">
                add
              </Button>

              <Chip label="Solf off" color="error" variant="outlined" />

              {/* description */}
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2">Description</Typography>
                <Typography variant="body2">{product.description}</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </ShopLayout>
  );
}
