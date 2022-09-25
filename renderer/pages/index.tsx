import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { Title } from '@components/common/Utils';
import { sidebarItems } from '@constants/generative/layoutConfiguration';
import Link from 'next/link';

export default function Home() {
  const theme = useTheme();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      p={4}
      width={1}
      flexGrow={1}
      gap={5}
    >
      <Title title="Hub" />
      {sidebarItems.map(({ Icon, href, titleKey }) => (
        <Grid item>
          <Card>
            <Link href={href}>
              <CardActionArea>
                <CardContent
                  sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: theme.spacing(20),
                    minHeight: theme.spacing(20),
                  }}
                >
                  <Icon fontSize="large" />
                  <Typography variant="subtitle1">{titleKey}</Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
