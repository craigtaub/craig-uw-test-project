resource "aws_route53_record" "craig-uw-test-project" {
  zone_id = "${data.terraform_remote_state.core.vpc_dns_zone_id}"
  name    = "craigstestapp.${var.environment}.${var.vpc_dns_zone_name}"
  type    = "CNAME"
  ttl     = "30"
  records = ["${var.k8s-public-ingress}"]
}
