import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Sheet,
  Link,
  Divider,
} from '@mui/joy';

export function Login() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'background.body',
        background: 'linear-gradient(45deg, #f3f4f6 30%, #e5e7eb 90%)',
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          width: '100%',
          maxWidth: 400,
          py: 4,
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          borderRadius: 'md',
          boxShadow: 'lg',
          bgcolor: 'background.surface',
          border: '1px solid',
          borderColor: 'divider',
          mx: 2,
        }}
      >
        <div>
          <Typography 
            level="h3" 
            component="h1" 
            sx={{ 
              textAlign: 'center',
              mb: 1,
              color: '#03956b',
              fontWeight: 'bold',
            }}
          >
            Вход
          </Typography>
          <Typography 
            level="body-sm" 
            sx={{ 
              textAlign: 'center',
              color: '#64635f',
            }}
          >
            Войдите в свой аккаунт
          </Typography>
        </div>

        <Divider />

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <FormControl>
            <FormLabel>Почта</FormLabel>
            <Input
              placeholder="Введите почту"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Пароль</FormLabel>
            <Input
              placeholder="Введите пароль"
              type="password"
            />
          </FormControl>

          <Button
            type="submit"
            sx={{ 
              mt: 2,
              py: 1.5,
              fontSize: 'md',
              fontWeight: 'bold',
              borderRadius: '8px',
              background: 'linear-gradient(45deg, #4CAF50 30%, #66BB6A 90%)'
            }}
            fullWidth
          >
            Войти
          </Button>
        </form>

        <Divider>
          <Typography level="body-xs" sx={{ color: '#64635f' }}>
            или
          </Typography>
        </Divider>

        <Typography
          endDecorator={
            <Link 
              href="/register"
              sx={{ 
                color: '#03956b'
              }}
            >
              Зарегистрироваться
            </Link>
          }
          fontSize="sm"
          sx={{ 
            textAlign: 'center',
            color: '#64635f',
          }}
        >
          Нет аккаунта?
        </Typography>
      </Sheet>
    </Box>
  );
} 