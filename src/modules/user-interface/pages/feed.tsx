import {
  Box,
  Sheet,
  Typography,
  Input,
  IconButton,
  Divider,
} from '@mui/joy';

export function Feed() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        bgcolor: '#f5f5f5',
        boxSizing: 'border-box',
        overflowX: 'hidden',
        margin: 0,
        padding: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          px: 2,
          py: 2,
          bgcolor: 'white',
          width: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography level="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
            CoinKeeper
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography level="body-md" sx={{ color: '#666' }}>
            lobok.danya@list.ru
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: '100%',
          px: 2,
          mb: 2,
          display: 'flex',
          justifyContent: 'left',
        }}
      >
        <Input
          placeholder="Поиск"
          sx={{
            bgcolor: 'white',
            borderRadius: 'md',
            maxWidth: 1200,
            width: '100%',
          }}
        />
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 350px',
          gap: 2,
          width: '100%',
          px: 2,
          pb: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Sheet
            variant="outlined"
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 'md',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography level="h4" sx={{ fontWeight: 'bold', color: '#666' }}>
                  Доходы
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography level="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    0 ₽
                  </Typography>
                  <Typography level="body-sm" sx={{ color: '#999' }}>
                    получено
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: 2, bgcolor: 'white', minHeight: 100, display: 'flex', alignItems: 'center' }}>
              <IconButton
                variant="outlined"
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  borderColor: '#ddd',
                  color: '#999',
                }}
              >
                ➕
              </IconButton>
            </Box>
          </Sheet>
          <Sheet
            variant="outlined"
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 'md',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography level="h4" sx={{ fontWeight: 'bold', color: '#666' }}>
                  СЧЕТА
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography level="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    0 ₽
                  </Typography>
                  <Typography level="body-sm" sx={{ color: '#999' }}>
                    в наличии
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: 2, bgcolor: 'white', minHeight: 100, display: 'flex', alignItems: 'center' }}>
              <IconButton
                variant="outlined"
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  borderColor: '#ddd',
                  color: '#999',
                }}
              >
                ➕
              </IconButton>
            </Box>
          </Sheet>
          <Sheet
            variant="outlined"
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 'md',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography level="h4" sx={{ fontWeight: 'bold', color: '#666' }}>
                  РАСХОДЫ
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography level="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    0 ₽
                  </Typography>
                  <Typography level="body-sm" sx={{ color: '#999' }}>
                    потрачено
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: 2, bgcolor: 'white', minHeight: 200, display: 'flex', alignItems: 'center' }}>
              <IconButton
                variant="outlined"
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  borderColor: '#ddd',
                  color: '#999',
                }}
              >
                ➕
              </IconButton>
            </Box>
          </Sheet>

          <Sheet
            variant="outlined"
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 'md',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography level="h4" sx={{ fontWeight: 'bold', color: '#666' }}>
                  РАСХОДЫ И ДОХОДЫ
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography level="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    0 ₽
                  </Typography>
                  <Typography level="body-sm" sx={{ color: '#999' }}>
                    статистика
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: 2, bgcolor: 'white', minHeight: 200, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Input
                  placeholder="Добавить фильтр"
                  sx={{ flex: 1 }}
                />
              </Box>
              <Typography level="body-md" sx={{ mb: 2, color: '#666', textAlign: 'center' }}>
                У вас ещё нет данных для статистики
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Input placeholder="бюджет" sx={{ flex: 1 }} />
                <Input placeholder="ваш период" sx={{ flex: 1 }} />
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
              </Box>
            </Box>
          </Sheet>
        </Box>

        <Box sx={{ gridColumn: 'span 1' }}>
          <Sheet
            variant="outlined"
            sx={{
              bgcolor: '#f5f5f5',
              borderRadius: 'md',
              overflow: 'hidden',
              position: 'sticky',
              top: 20,
            }}
          >
            <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                <Typography level="h4" sx={{ fontWeight: 'bold', color: '#666' }}>
                  СЕГОДНЯ
                </Typography>
                <Box sx={{ textAlign: 'right' }}>
                  <Typography level="h4" sx={{ fontWeight: 'bold', color: '#333' }}>
                    18 янв
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: 2, bgcolor: 'white', minHeight: 200, display: 'flex', alignItems: 'center' }}>
            <Typography level="body-md" sx={{ mb: 2, color: '#666', textAlign: 'center' }}>
            Здесь будет список ваших операций, в котором вы всегда сможете найти историю ваших покупок, отредактировать, повторить или удалить их 
              </Typography>
            </Box>
          </Sheet>
        </Box>
      </Box>
    </Box>
  );
}

