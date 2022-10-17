import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export const ApplicationContainer = ({ children }) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFF",
          width: "100vw",
          height: "100vh",
          paddingLeft: "0px",
        },
      }}
      fixed
      footer={
        <Footer height={60} p="md">
          <Group position="apart" spacing="lg">
            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>List Time:</span> 0hr 25m
            </Text>

            <Text size="sm">
              <span style={{ fontWeight: "bolder" }}>End Time:</span> 0hr 7:51pm
            </Text>
          </Group>
        </Footer>
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Text size="lg" weight="bolder">
              Alpaca Activity
            </Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
};
