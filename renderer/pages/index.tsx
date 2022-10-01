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
import { useLanguage } from '@contexts/LanguageContext';

export default function Home() {
  const theme = useTheme();

  const { text } = useLanguage();

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
        <Grid item key={titleKey}>
          <Card>
            <Link href={href} passHref>
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
                  <Typography variant="subtitle1">
                    {text.ui.sidebar[titleKey]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
