package gateway;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {

    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("account-service", r -> r.path("/accounts/**")
                        .uri("http://localhost:8081"))
                .route("loan-service", r -> r.path("/loans/**")
                        .uri("http://localhost:8082"))
                .build();
    }
}