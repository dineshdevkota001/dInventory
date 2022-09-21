import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Title from 'components/common/Utils/Title';
import { sidebarItems } from 'constants/generative/sidebar';
import Link from 'next/link';

export default function Home() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      p={4}
      width={1}
      flexGrow={1}
      height={'100vh'}
    >
      <Title title="Hub" />
      {sidebarItems.map(({ Icon, href, title }) => (
        <Grid item>
          <Card>
            <Link href={href}>
              <CardActionArea>
                <CardContent>
                  <Icon fontSize="large" />
                  <Typography variant="subtitle1">{title}</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
